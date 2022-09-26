"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82385],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Viewing Metrics",weight:2,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/viewing-metrics","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/viewing-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/viewing-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/viewing-metrics","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/viewing-metrics/"]},l=void 0,c={unversionedId:"explanations/integrations-in-rancher/cluster-monitoring/viewing-metrics",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/viewing-metrics",title:"Viewing Metrics",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/viewing-metrics.md",sourceDirName:"explanations/integrations-in-rancher/cluster-monitoring",slug:"/explanations/integrations-in-rancher/cluster-monitoring/viewing-metrics",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/viewing-metrics",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/viewing-metrics.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662434661,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Viewing Metrics",weight:2,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/viewing-metrics","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/viewing-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/viewing-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/viewing-metrics","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/viewing-metrics/"]},sidebar:"tutorialSidebar",previous:{title:"Prometheus Configuration",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus"},next:{title:"OPA Gatekeeper",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/opa-gatekeeper"}},m={},p=[{value:"Rancher Dashboard",id:"rancher-dashboard",level:2},{value:"Grafana",id:"grafana",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Accessing the Cluster-level Grafana Instance",id:"accessing-the-cluster-level-grafana-instance",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,i.kt)("p",null,"After you've enabled monitoring at either the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"cluster level")," or ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring"},"project level"),", you will want to be start viewing the data being collected. There are multiple ways to view this data."),(0,i.kt)("h2",{id:"rancher-dashboard"},"Rancher Dashboard"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," This is only available if you've enabled monitoring at the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"cluster level"),". Project specific analytics must be viewed using the project's Grafana instance.")),(0,i.kt)("p",null,"Rancher's dashboards are available at multiple locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cluster Dashboard"),": From the ",(0,i.kt)("strong",{parentName:"li"},"Global")," view, navigate to the cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node Metrics"),": From the ",(0,i.kt)("strong",{parentName:"li"},"Global")," view, navigate to the cluster. Select ",(0,i.kt)("strong",{parentName:"li"},"Nodes"),". Find the individual node and click on its name. Click ",(0,i.kt)("strong",{parentName:"li"},"Node Metrics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Workload Metrics"),": From the ",(0,i.kt)("strong",{parentName:"li"},"Global")," view, navigate to the project. From the main navigation bar, choose ",(0,i.kt)("strong",{parentName:"li"},"Resources > Workloads.")," (In versions before v2.3.0, choose ",(0,i.kt)("strong",{parentName:"li"},"Workloads")," on the main navigation bar.) Find the individual workload and click on its name. Click ",(0,i.kt)("strong",{parentName:"li"},"Workload Metrics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pod Metrics"),": From the ",(0,i.kt)("strong",{parentName:"li"},"Global")," view, navigate to the project. Select ",(0,i.kt)("strong",{parentName:"li"},"Workloads > Workloads"),". Find the individual workload and click on its name. Find the individual pod and click on its name. Click ",(0,i.kt)("strong",{parentName:"li"},"Pod Metrics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Container Metrics"),": From the ",(0,i.kt)("strong",{parentName:"li"},"Global")," view, navigate to the project. From the main navigation bar, choose ",(0,i.kt)("strong",{parentName:"li"},"Resources > Workloads.")," (In versions before v2.3.0, choose ",(0,i.kt)("strong",{parentName:"li"},"Workloads")," on the main navigation bar.) Find the individual workload and click on its name. Find the individual pod and click on its name. Find the individual container and click on its name. Click ",(0,i.kt)("strong",{parentName:"li"},"Container Metrics."))),(0,i.kt)("p",null,"Prometheus metrics are displayed and are denoted with the Grafana icon. If you click on the icon, the metrics will open a new tab in Grafana."),(0,i.kt)("p",null,"Within each Prometheus metrics widget, there are several ways to customize your view."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Toggle between two views:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Detail"),": Displays graphs and charts that let you view each event in a Prometheus time series"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Summary")," Displays events in a Prometheus time series that are outside the norm."))),(0,i.kt)("li",{parentName:"ul"},"Change the range of the time series that you're viewing to see a more refined or expansive data sample."),(0,i.kt)("li",{parentName:"ul"},"Customize the data sample to display data between specific dates and times.")),(0,i.kt)("p",null,"When analyzing these metrics, don't be concerned about any single standalone metric in the charts and graphs. Rather, you should establish a baseline for your metrics over the course of time, e.g. the range of values that your components usually operate within and are considered normal. After you establish the baseline, be on the lookout for any large deltas in the charts and graphs, as these big changes usually indicate a problem that you need to investigate."),(0,i.kt)("h2",{id:"grafana"},"Grafana"),(0,i.kt)("p",null,"If you've enabled monitoring at either the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"cluster level")," or ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring"},"project level"),", Rancher automatically creates a link to Grafana instance. Use this link to view monitoring data."),(0,i.kt)("p",null,"Grafana allows you to query, visualize, alert, and ultimately, understand your cluster and workload data. For more information on Grafana and its capabilities, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana"},"Grafana website"),"."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Rancher determines which users can access the new Grafana instance, as well as the objects they can view within it, by validating them against the user's ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"cluster or project roles"),". In other words, a user's access in Grafana mirrors their access in Rancher."),(0,i.kt)("p",null,"When you go to the Grafana instance, you will be logged in with the username ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and the password ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),". If you log out and log in again, you will be prompted to change your password. You will only have access to the URL of the Grafana instance if you have access to view the corresponding metrics in Rancher. So for example, if your Rancher permissions are scoped to the project level, you won't be able to see the Grafana instance for cluster-level metrics."),(0,i.kt)("h3",{id:"accessing-the-cluster-level-grafana-instance"},"Accessing the Cluster-level Grafana Instance"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, navigate to a cluster that has monitoring enabled.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"System")," project view. This project is where the cluster-level Grafana instance runs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apps.")," In versions before v2.2.0, choose ",(0,i.kt)("strong",{parentName:"p"},"Catalog Apps")," on the main navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-monitoring")," application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-monitoring")," application, there are two ",(0,i.kt)("inlineCode",{parentName:"p"},"/index.html")," links: one that leads to a Grafana instance and one that leads to a Prometheus instance. When you click the Grafana link, it will redirect you to a new webpage for Grafana, which shows metrics for the cluster.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will be signed in to the Grafana instance automatically. The default username is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and the default password is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),". For security, we recommend that you log out of Grafana, log back in with the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," password, and change your password."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results:")," You are logged into Grafana from the Grafana instance. After logging in, you can view the preset Grafana dashboards, which are imported via the ",(0,i.kt)("a",{parentName:"p",href:"http://docs.grafana.org/administration/provisioning/#dashboards"},"Grafana provisioning mechanism"),", so you cannot modify them directly. For now, if you want to configure your own dashboards, clone the original and modify the new copy."))}h.isMDXComponent=!0}}]);