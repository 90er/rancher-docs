"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(r),d=i,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||n;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},83349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const n={title:"Configuring a Global Default Private Registry"},o=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",title:"Configuring a Global Default Private Registry",description:"You might want to use a private container registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Configuring a Global Default Private Registry"},sidebar:"tutorialSidebar",previous:{title:"Pod Security Policies",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},next:{title:"Cluster Administration",permalink:"/v2.0-v2.4/pages-for-subheaders/manage-clusters"}},l={},u=[{value:"Setting a Private Registry with No Credentials as the Default Registry",id:"setting-a-private-registry-with-no-credentials-as-the-default-registry",level:2},{value:"Setting a Private Registry with Credentials when Deploying a Cluster",id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You might want to use a private container registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters."),(0,i.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the global default registry through the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,i.kt)("p",null,"This section is about configuring the global default private registry, and focuses on how to configure the registry from the Rancher UI after Rancher is installed."),(0,i.kt)("p",null,"For instructions on setting up a private registry with command line options during the installation of Rancher, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/air-gap-helm2"},"air gapped Docker installation")," or ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/air-gap-helm2"},"air gapped Kubernetes installation")," instructions."),(0,i.kt)("p",null,"If your private registry requires credentials, it cannot be used as the default registry. There is no global way to set up a private registry with authorization for every Rancher-provisioned cluster. Therefore, if you want a Rancher-provisioned cluster to pull images from a private registry with credentials, you will have to ",(0,i.kt)("a",{parentName:"p",href:"#setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"pass in the registry credentials through the advanced cluster options")," every time you create a new cluster."),(0,i.kt)("h2",{id:"setting-a-private-registry-with-no-credentials-as-the-default-registry"},"Setting a Private Registry with No Credentials as the Default Registry"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into Rancher and configure the default administrator password.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go into the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," view."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(12800).Z,width:"1193",height:"98"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Look for the setting called ",(0,i.kt)("inlineCode",{parentName:"p"},"system-default-registry")," and choose ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(65989).Z,width:"1590",height:"174"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the value to your registry (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.yourdomain.com:port"),"). Do not prefix the registry with ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(44137).Z,width:"1909",height:"649"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher will use your private registry to pull system images."),(0,i.kt)("h2",{id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"Setting a Private Registry with Credentials when Deploying a Cluster"),(0,i.kt)("p",null,"You can follow these steps to configure a private registry when you provision a cluster with Rancher:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When you create a cluster through the Rancher UI, go to the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Options")," section and click ",(0,i.kt)("strong",{parentName:"li"},"Show Advanced Options.")),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("b",null,"Enable Private Registries")," section, click ",(0,i.kt)("strong",{parentName:"li"},"Enabled.")),(0,i.kt)("li",{parentName:"ol"},"Enter the registry URL and credentials."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The new cluster will be able to pull images from the private registry."))}c.isMDXComponent=!0},65989:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/edit-system-default-registry-264b6c02c8b45d166f9f041c462be057.png"},44137:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/enter-system-default-registry-0f3a3119182bad0cdb2408b972fe5353.png"},12800:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/settings-3007fd9efba84c39d7ee9e1e7f738ac0.png"}}]);