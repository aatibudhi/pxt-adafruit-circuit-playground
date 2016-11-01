#include "ksbit.h"
#include <limits.h>

#include <Adafruit_CircuitPlayground.h>


namespace String_ {
    //%
    StringData *charAt(StringData *s, int pos) {
      return ManagedString((char)ManagedString(s).charAt(pos)).leakData();
    }

    //%
    int charCodeAt(StringData *s, int index) {
        return ManagedString(s).charAt(index);
    }

    //%
    StringData *concat(StringData *s, StringData *other) {
      ManagedString a(s), b(other);
      return (a + b).leakData();
    }

    //%
    int compare(StringData *s, StringData *that) {
        return strcmp(s->data, that->data);
    }

    //%
    int length(StringData *s) { return s->len; }

    //%
    StringData *fromCharCode(int code)
    {
      return ManagedString((char)code).leakData();
    }

    //%
    int toNumber(StringData *s) {
      return atoi(s->data);
    }

    //%
    StringData *mkEmpty()
    {
        return ManagedString::EmptyString.leakData();
    }

    //%
    StringData *substr(StringData *s, int start, int length)
    {
        if (length <= 0)
            return mkEmpty();
        if (start < 0)
            start = max(s->len + start, 0);
        length = min(length, s->len - start);
        ManagedString x(s);
        return x.substring(start, length).leakData();
    }
}


namespace Boolean_ {
    // Cache the string literals "true" and "false" when used.
    // Note that the representation of booleans stays the usual C-one.
    
    static const char sTrue[]  __attribute__ ((aligned (4))) = "\xff\xff\x04\x00" "true\0";
    static const char sFalse[] __attribute__ ((aligned (4))) = "\xff\xff\x05\x00" "false\0";

    //%
    StringData* toString(bool v)
    {
      if (v) {
        return (StringData*)(void*)sTrue;
      } else {
        return (StringData*)(void*)sFalse;
      }            
    }

    //%
    bool bang(bool v) { return !v; }
}

namespace Number_ {
    //%
    StringData* toString(int n)
    {
      return ManagedString(n).leakData();
    }

    // +, - and friends are handled directly by assembly instructions
    // The comparisons are here as they are more code-size efficient
    
    //%
    bool lt(int x, int y) { return x < y; }
    //%
    bool le(int x, int y) { return x <= y; }
    //%
    bool neq(int x, int y) { return x != y; }
    //%
    bool eq(int x, int y) { return x == y; }
    //%
    bool gt(int x, int y) { return x > y; }
    //%
    bool ge(int x, int y) { return x >= y; }

    // These in fact call into C runtime on Cortex-M0 
    //%
    int div(int x, int y) { return x / y; }
    //%
    int mod(int x, int y) { return x % y; }
}

namespace Math_ {
    //%
    int pow(int x, int y)
    {
      if (y < 0)
        return 0;
      int r = 1;
      while (y) {
        if (y & 1)
          r *= x;
        y >>= 1;
        x *= x;
      }
      return r;
    }

    #define microbit_random(x) random(x)
    
    //%
    int random(int max) {
      if (max == INT_MIN)
        return -microbit_random(INT_MAX);
      else if (max < 0)
        return -microbit_random(-max);
      else if (max == 0)
        return 0;
      else
        return microbit_random(max);
    }
    
    //%
    int sqrt(int x)
    {
      return ::sqrt(x);
    }
}

namespace Array_ {
    //%
    RefCollection *mk(uint32_t flags)
    {
      return 0;
    }
    //%
    int length(RefCollection *c) { return 0; }
    //%
    void push(RefCollection *c, uint32_t x) { }
    //%
    uint32_t getAt(RefCollection *c, int x) { return 0; }
    //%
    void removeAt(RefCollection *c, int x) {  }
    //%
    void setAt(RefCollection *c, int x, uint32_t y) {  }
    //%
    int indexOf(RefCollection *c, uint32_t x, int start) { return 0; }
    //%
    int removeElement(RefCollection *c, uint32_t x) { return 0; }
}

// Import some stuff directly
namespace pxt {
  //%
  void registerWithDal(int id, int event, Action a) { }
  //%
  uint16_t runAction3(Action a, int arg0, int arg1, int arg2);
  //%
  uint16_t runAction2(Action a, int arg0, int arg1);
  //%
  uint16_t runAction1(Action a, int arg0);
  //%
  uint16_t runAction0(Action a);
  //%
  Action mkAction(int reflen, int totallen, int startptr) { panic(51); return 0; }
  //%
  RefRecord* mkClassInstance(int offset) { panic(51); return 0; }
  //%
  void RefRecord_destroy(RefRecord *r) { panic(51); }
  //%
  void RefRecord_print(RefRecord *r) { panic(51); }
  //%
  void debugMemLeaks() { panic(51); }
}

// Import some stuff directly
namespace pxt {
  //%
  int incr(uint16_t e);
  //%
  void decr(uint16_t e);
  //%
  uint16_t *allocate(uint16_t sz);
  //%
  int templateHash();
  //%
  int programHash();
  //%
  void *ptrOfLiteral(int offset);
  //%
  int getNumGlobals();
}

#if 0
namespace pxtrt {
  //%
  uint32_t ldloc(RefLocal *r) {
    return r->v;
  }

  //%
  uint32_t ldlocRef(RefRefLocal *r) {
    uint32_t tmp = r->v;
    incr(tmp);
    return tmp;
  }

  //%
  void stloc(RefLocal *r, uint32_t v) {
    r->v = v;
  }

  //%
  void stlocRef(RefRefLocal *r, uint32_t v) {
    decr(r->v);
    r->v = v;
  }

  //%
  RefLocal *mkloc() {
    return new RefLocal();
  }

  //%
  RefRefLocal *mklocRef() {
    return new RefRefLocal();
  }

  // All of the functions below unref() self. This is for performance reasons -
  // the code emitter will not emit the unrefs for them.
 
  //%
  uint32_t ldfld(RefRecord *r, int idx) {
    auto tmp = r->ld(idx);
    r->unref();
    return tmp;
  }

  //%
  uint32_t ldfldRef(RefRecord *r, int idx) {
    auto tmp = r->ldref(idx);
    r->unref();
    return tmp;
  }

  //%
  void stfld(RefRecord *r, int idx, uint32_t val) {
    r->st(idx, val);
    r->unref();
  }

  //%
  void stfldRef(RefRecord *r, int idx, uint32_t val) {
    r->stref(idx, val);
    r->unref();
  }

  // Store a captured local in a closure. It returns the action, so it can be chained.
  //%
  RefAction *stclo(RefAction *a, int idx, uint32_t v)
  {
    //DBG("STCLO "); a->print(); DBG("@%d = %p\n", idx, (void*)v);
    a->stCore(idx, v);
    return a;
  }
}
#endif

namespace pxtrt {
  
  //%
  void panic(int code)
  {
    pxt::panic(code);
  }

  //%
  int stringToBool(StringData *s) {
    if (s == NULL) return 0;
    if (s->len == 0) {
      s->decr();
      return 0;
    }
    s->decr();
    return 1;
  }

  //%
  StringData* emptyToNull(StringData *s) {
    if (!s || s->len == 0)
      return NULL;
    return s;
  }

  //%
  int ptrToBool(uint32_t p) {
    if (p) {
      decr(p);
      return 1;
    } else {
      return 0;
    }
  }
}

#if 0
namespace pxtrt {

  //%
  RefMap *mkMap() {
    return new RefMap();
  }

  //%
  uint32_t mapGet(RefMap *map, uint32_t key) {
    int i = map->findIdx(key);
    if (i < 0) {
      map->unref();
      return 0;
    }
    uint32_t r = map->data[i].val;
    map->unref();
    return r;
  }

  //%
  uint32_t mapGetRef(RefMap *map, uint32_t key) {
    int i = map->findIdx(key);
    if (i < 0) {
      map->unref();
      return 0;
    }
    uint32_t r = incr(map->data[i].val);
    map->unref();
    return r;
  }

  //%
  void mapSet(RefMap *map, uint32_t key, uint32_t val) {
    int i = map->findIdx(key);
    if (i < 0) {
      map->data.push_back({
        key << 1,
        val
      });
    } else {
      if (map->data[i].key & 1) {
        decr(map->data[i].val);
        map->data[i].key = key << 1;
      }
      map->data[i].val = val;
    }
    map->unref();
  }

  //%
  void mapSetRef(RefMap *map, uint32_t key, uint32_t val) {
    int i = map->findIdx(key);
    if (i < 0) {
      map->data.push_back({
        (key << 1) | 1,
        val
      });
    } else {
      if (map->data[i].key & 1) {
        decr(map->data[i].val);
      } else {
        map->data[i].key = (key << 1) | 1;
      }
      map->data[i].val = val;
    }
    map->unref();      
  }
}
#endif

namespace pxtrt {

  //
  // Debugger
  //

  //%
  void* getGlobalsPtr() {
    return globals;
  }

  //%
  void runtimeWarning(StringData *s) {
    // noop for now
  }
}
