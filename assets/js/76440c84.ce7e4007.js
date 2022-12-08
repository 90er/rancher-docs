"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Role-based Access Control"},l=void 0,s={unversionedId:"explanations/integrations-in-rancher/istio/rbac-for-istio",id:"version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio",title:"Role-based Access Control",description:"This section describes the permissions required to access Istio features and how to configure access to the Kiali and Jaeger visualizations.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/rbac-for-istio",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/rbac-for-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Role-based Access Control"},sidebar:"tutorialSidebar",previous:{title:"CPU and Memory Allocations",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},next:{title:"Disabling Istio",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/disable-istio"}},o={},c=[{value:"Cluster-level Access",id:"cluster-level-access",level:2},{value:"Project-level Access",id:"project-level-access",level:2},{value:"Access to Visualizations",id:"access-to-visualizations",level:2},{value:"Summary of Default Permissions for Istio Users",id:"summary-of-default-permissions-for-istio-users",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes the permissions required to access Istio features and how to configure access to the Kiali and Jaeger visualizations."),(0,n.kt)("h2",{id:"cluster-level-access"},"Cluster-level Access"),(0,n.kt)("p",null,"By default, only cluster administrators can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable Istio for the cluster"),(0,n.kt)("li",{parentName:"ul"},"Configure resource allocations for Istio"),(0,n.kt)("li",{parentName:"ul"},"View each UI for Prometheus, Grafana, Kiali, and Jaeger")),(0,n.kt)("h2",{id:"project-level-access"},"Project-level Access"),(0,n.kt)("p",null,"After Istio is enabled in a cluster, project owners and members have permission to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable and disable Istio sidecar auto-injection for namespaces"),(0,n.kt)("li",{parentName:"ul"},"Add the Istio sidecar to workloads"),(0,n.kt)("li",{parentName:"ul"},"View the traffic metrics and traffic graph for the cluster"),(0,n.kt)("li",{parentName:"ul"},"View the Kiali and Jaeger visualizations if cluster administrators give access to project members"),(0,n.kt)("li",{parentName:"ul"},"Configure Istio's resources (such as the gateway, destination rules, or virtual services) with ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl")," (This does not apply to read-only project members)")),(0,n.kt)("h2",{id:"access-to-visualizations"},"Access to Visualizations"),(0,n.kt)("p",null,"By default,  the Kiali and Jaeger visualizations are restricted to the cluster owner because the information in them could be sensitive."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Jaeger")," provides a UI for a distributed tracing system, which is useful for root cause analysis and for determining what causes poor performance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kiali")," provides a diagram that shows the services within a service mesh and how they are connected."),(0,n.kt)("p",null,"Rancher supports giving groups permission to access Kiali and Jaeger, but not individuals."),(0,n.kt)("p",null,"To configure who has permission to access the Kiali and Jaeger UI,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the cluster view and click ",(0,n.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,n.kt)("li",{parentName:"ol"},"Then go to the ",(0,n.kt)("strong",{parentName:"li"},"Member Access")," section. If you want to restrict access to certain groups, choose ",(0,n.kt)("strong",{parentName:"li"},"Allow cluster owner and specified members to access Kiali and Jaeger UI.")," Search for the groups that you want to have access to Kiali and Jaeger. If you want all members to have access to the tools, click ",(0,n.kt)("strong",{parentName:"li"},"Allow all members to access Kiali and Jaeger UI.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The access levels for Kiali and Jaeger have been updated."),(0,n.kt)("h2",{id:"summary-of-default-permissions-for-istio-users"},"Summary of Default Permissions for Istio Users"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Permission"),(0,n.kt)("th",{parentName:"tr",align:null},"Cluster Administrators"),(0,n.kt)("th",{parentName:"tr",align:null},"Project Owners"),(0,n.kt)("th",{parentName:"tr",align:null},"Project Members"),(0,n.kt)("th",{parentName:"tr",align:null},"Read-only Project Members"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio for the cluster"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Configure Istio resource limits"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Control who has access to Kiali and the Jaeger UI"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio for a namespace"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio on workloads"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Configure Istio with ",(0,n.kt)("inlineCode",{parentName:"td"},"kubectl")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"View Prometheus UI and Grafana UI"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"View Kiali UI and Jaeger UI (",(0,n.kt)("a",{parentName:"td",href:"#access-to-visualizations"},"Configurable"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"View Istio project dashboard, including traffic metrics*"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By default, only the cluster owner will see the traffic graph. Project members will see only a subset of traffic metrics. Project members cannot see the traffic graph because it comes from Kiali, and access to Kiali is restricted to cluster owners by default.")))}p.isMDXComponent=!0}}]);