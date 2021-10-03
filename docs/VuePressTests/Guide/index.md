---
title: Guide
---

# Guide

## Vue Components
**Click the buttons to change the number**
<NumberModifier :start="5"></NumberModifier>

**The Code**

<!-- <<< @/.vuepress/components/NumberModifier.vue{2} -->

## Code Blocks
``` js{2}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Page Info
{{ $page }}

## Badges - We need stinking badges

### Badge Type <Badge text="warn" type="warn"/> <Badge text="tip" type="tip"/> <Badge text="error" type="error"/>
```md
Badge Type <Badge text="warn" type="warn"/> <Badge text="tip" type="tip"/> <Badge text="error" type="error"/>
```

### Badge Examples <Badge text="beta" type="warn"/> <Badge text="0.10.1+" type="tip"/> <Badge text="Not Good" type="error"/>
```md
Badge Examples <Badge text="beta" type="warn"/> <Badge text="0.10.1+" type="tip"/> <Badge text="Not Good" type="error"/>
```