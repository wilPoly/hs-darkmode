TODO:
#### Service workers
Service workers are not supported in Firefox (see [https://github.com/mozilla/web-ext/issues/2379](https://github.com/mozilla/web-ext/issues/2379)) so use the below workaround:

As a workaround, you can create two manifests.
**For Chrome:**
```json
background: {  service_worker: 'path.js'  }  
```
**For Firefox**
```json
background: {  scripts: ['path.js']  }
```
--> adapt for Chrome extension
