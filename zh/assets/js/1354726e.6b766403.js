"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=i(r),s=a,f=u["".concat(o,".").concat(s)]||u[s]||m[s]||l;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,p[1]=d;for(var i=2;i<l;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3"},p=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/open-ports-with-firewalld",id:"how-to-guides/advanced-user-guides/open-ports-with-firewalld",title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3",description:"\u6211\u4eec\u5efa\u8bae\u7981\u7528 firewalld\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Kubernetes 1.19 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5219\u5fc5\u987b\u5173\u95ed firewalld\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/open-ports-with-firewalld.md",sourceDirName:"how-to-guides/advanced-user-guides",slug:"/how-to-guides/advanced-user-guides/open-ports-with-firewalld",permalink:"/zh/how-to-guides/advanced-user-guides/open-ports-with-firewalld",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/open-ports-with-firewalld.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3"},sidebar:"tutorialSidebar",previous:{title:"\u6301\u7eed\u4ea4\u4ed8",permalink:"/zh/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery"},next:{title:"\u4e3a\u5927\u578b\u5b89\u88c5\u8fdb\u884c etcd \u8c03\u4f18",permalink:"/zh/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs"}},o={},i=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219",id:"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219",level:2}],c={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5efa\u8bae\u7981\u7528 firewalld\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Kubernetes 1.19 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5219\u5fc5\u987b\u5173\u95ed firewalld\u3002")),(0,a.kt)("p",null,"\u67d0\u4e9b ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux#Rebuilds"},"\u6e90\u81ea RHEL")," \u7684 Linux \u53d1\u884c\u7248\uff08\u5305\u62ec Oracle Linux\uff09\u7684\u9ed8\u8ba4\u9632\u706b\u5899\u89c4\u5219\u53ef\u80fd\u4f1a\u963b\u6b62\u4e0e Helm \u7684\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0cAWS \u4e2d\u7684\u4e00\u4e2a Oracle Linux \u955c\u50cf\u5177\u6709 REJECT \u89c4\u5219\uff0c\u8fd9\u4e9b\u89c4\u5219\u4f1a\u963b\u6b62 Helm \u4e0e Tiller \u901a\u4fe1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Chain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED\nACCEPT     icmp --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\nACCEPT     tcp  --  anywhere             anywhere             state NEW tcp dpt:ssh\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u9ed8\u8ba4\u9632\u706b\u5899\u89c4\u5219\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo iptables --list\n")),(0,a.kt)("p",null,"\u4e0b\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"firewalld"),"\uff0c\u5c06",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements#%E7%AB%AF%E5%8F%A3%E8%A6%81%E6%B1%82"},"\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219"),"\u5e94\u7528\u5230\u9ad8\u53ef\u7528 Rancher Server \u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u3002"),(0,a.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("p",null,"\u5b89\u88c5 v7.x \u6216\u66f4\u9ad8\u7248\u672c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"firewalld"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum install firewalld\nsystemctl start firewalld\nsystemctl enable firewalld\n")),(0,a.kt)("h2",{id:"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219"},"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219"),(0,a.kt)("p",null,"\u5728 Rancher \u9ad8\u53ef\u7528\u5b89\u88c5\u4e2d\uff0cRancher Server \u8bbe\u7f6e\u5728\u4e09\u4e2a\u8282\u70b9\u4e0a\uff0c\u4e09\u4e2a\u8282\u70b9\u5747\u5177\u6709 Kubernetes \u7684\u6240\u6709\u4e09\u4e2a\u89d2\u8272\uff08etcd\u3001controlplane \u548c worker\uff09\u3002\u5982\u679c\u4f60\u7684 Rancher Server \u8282\u70b9\u540c\u65f6\u5177\u6709\u8fd9\u4e09\u4e2a\u89d2\u8272\uff0c\u8bf7\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"firewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684 Rancher Server \u8282\u70b9\u914d\u7f6e\u4e86\u5355\u72ec\u7684\u89d2\u8272\uff0c\u8bf7\u6839\u636e\u8282\u70b9\u89d2\u8272\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u5728 etcd \u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\n\n# \u5728 controlplane \u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n\n# \u5728 worker \u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\nfirewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,a.kt)("p",null,"\u5728\u8282\u70b9\u4e0a\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"firewall-cmd")," \u547d\u4ee4\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u7528\u9632\u706b\u5899\u89c4\u5219\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"firewall-cmd --reload\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u9632\u706b\u5899\u5df2\u66f4\u65b0\uff0c\u56e0\u6b64 Helm \u53ef\u4ee5\u4e0e Rancher Server \u8282\u70b9\u901a\u4fe1\u4e86\u3002"))}m.isMDXComponent=!0}}]);