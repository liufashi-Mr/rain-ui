---
title: rain-ui
full: true
gapless: true
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

<code src="./components/home.tsx" inline="true"></code>

<!-- ```tsx | preview
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';
export default () => (
  <Section
    title="Experience the ultimate in Concis online"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold' }}
  >
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/s/concis-up772x?file=/src/App.js"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
``` -->

```tsx | preview
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';

export default () => (
  <Section
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <div style={{ paddingBottom: 30 }}>
      <span>Copyright © 2022-2023 Rain-ui. All Rights Reserved. Rain-ui 版权所有</span>
      <a href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noreferrer"
        style={{ color: '#165dff' }}
      >
         鄂ICP备2021022377号
      </a>
    </div>
  </Section>
);
```
