"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(l,".").concat(k)]||m[k]||p[k]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"\u521b\u5efa EKS \u96c6\u7fa4"},o=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",title:"\u521b\u5efa EKS \u96c6\u7fa4",description:"Amazon EKS \u4e3a Kubernetes \u96c6\u7fa4\u63d0\u4f9b\u6258\u7ba1\u7684 controlplane\u3002Amazon EKS \u8de8\u591a\u4e2a\u53ef\u7528\u533a\u8fd0\u884c Kubernetes controlplane \u5b9e\u4f8b\uff0c\u4ee5\u786e\u4fdd\u9ad8\u53ef\u7528\u6027\u3002Rancher \u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u89c2\u7684\u7528\u6237\u754c\u9762\uff0c\u7528\u4e8e\u7ba1\u7406\u548c\u90e8\u7f72\u4f60\u8fd0\u884c\u5728 Amazon EKS \u4e2d\u7684 Kubernetes \u96c6\u7fa4\u3002\u901a\u8fc7\u672c\u6307\u5357\uff0c\u4f60\u5c06\u4f7f\u7528 Rancher \u5728\u4f60\u7684 AWS \u8d26\u6237\u4e2d\u5feb\u901f\u8f7b\u677e\u5730\u542f\u52a8 Amazon EKS Kubernetes \u96c6\u7fa4\u3002\u6709\u5173 Amazon EKS \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6b64\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks.md",tags:[],version:"current",lastUpdatedAt:1676523322,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"\u521b\u5efa EKS \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u8bbe\u7f6e\u96c6\u7fa4",permalink:"/zh/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},next:{title:"\u521b\u5efa GKE \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"}},l={},c=[{value:"Amazon Web \u670d\u52a1\u7684\u5148\u51b3\u6761\u4ef6",id:"amazon-web-\u670d\u52a1\u7684\u5148\u51b3\u6761\u4ef6",level:2},{value:"Amazon VPC",id:"amazon-vpc",level:3},{value:"IAM \u7b56\u7565",id:"iam-\u7b56\u7565",level:3},{value:"\u521b\u5efa EKS \u96c6\u7fa4",id:"\u521b\u5efa-eks-\u96c6\u7fa4",level:2},{value:"EKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",id:"eks-\u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"AWS \u670d\u52a1\u4e8b\u4ef6",id:"aws-\u670d\u52a1\u4e8b\u4ef6",level:2},{value:"\u5b89\u5168\u4e0e\u5408\u89c4",id:"\u5b89\u5168\u4e0e\u5408\u89c4",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u6700\u5c0f EKS \u6743\u9650",id:"\u6700\u5c0f-eks-\u6743\u9650",level:2},{value:"\u670d\u52a1\u89d2\u8272\u6743\u9650",id:"\u670d\u52a1\u89d2\u8272\u6743\u9650",level:3},{value:"VPC \u6743\u9650",id:"vpc-\u6743\u9650",level:3},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa EKS \u96c6\u7fa4",id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-eks-\u96c6\u7fa4",level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Amazon EKS \u4e3a Kubernetes \u96c6\u7fa4\u63d0\u4f9b\u6258\u7ba1\u7684 controlplane\u3002Amazon EKS \u8de8\u591a\u4e2a\u53ef\u7528\u533a\u8fd0\u884c Kubernetes controlplane \u5b9e\u4f8b\uff0c\u4ee5\u786e\u4fdd\u9ad8\u53ef\u7528\u6027\u3002Rancher \u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u89c2\u7684\u7528\u6237\u754c\u9762\uff0c\u7528\u4e8e\u7ba1\u7406\u548c\u90e8\u7f72\u4f60\u8fd0\u884c\u5728 Amazon EKS \u4e2d\u7684 Kubernetes \u96c6\u7fa4\u3002\u901a\u8fc7\u672c\u6307\u5357\uff0c\u4f60\u5c06\u4f7f\u7528 Rancher \u5728\u4f60\u7684 AWS \u8d26\u6237\u4e2d\u5feb\u901f\u8f7b\u677e\u5730\u542f\u52a8 Amazon EKS Kubernetes \u96c6\u7fa4\u3002\u6709\u5173 Amazon EKS \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6b64",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"amazon-web-\u670d\u52a1\u7684\u5148\u51b3\u6761\u4ef6"},"Amazon Web \u670d\u52a1\u7684\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u90e8\u7f72\u5230 Amazon AWS \u4f1a\u4ea7\u751f\u8d39\u7528\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/pricing/"},"EKS \u5b9a\u4ef7\u9875\u9762"),"\u3002")),(0,a.kt)("p",null,"\u8981\u5728 EKS \u4e0a\u8bbe\u7f6e\u96c6\u7fa4\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e Amazon VPC\uff08\u865a\u62df\u79c1\u6709\u4e91\uff09\u3002\u4f60\u8fd8\u9700\u8981\u786e\u4fdd\u7528\u4e8e\u521b\u5efa EKS \u96c6\u7fa4\u7684\u8d26\u53f7\u5177\u6709\u9002\u5f53\u7684",(0,a.kt)("a",{parentName:"p",href:"#%E6%9C%80%E5%B0%8F-eks-%E6%9D%83%E9%99%90"},"\u6743\u9650"),"\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html#eks-prereqs"},"Amazon EKS \u5148\u51b3\u6761\u4ef6\u5b98\u65b9\u6307\u5357"),"\u3002"),(0,a.kt)("h3",{id:"amazon-vpc"},"Amazon VPC"),(0,a.kt)("p",null,"\u4f60\u9700\u8981\u5efa\u7acb\u4e00\u4e2a Amazon VPC \u6765\u542f\u52a8 EKS \u96c6\u7fa4\u3002VPC \u4f7f\u4f60\u80fd\u591f\u5c06 AWS \u8d44\u6e90\u542f\u52a8\u5230\u4f60\u5b9a\u4e49\u7684\u865a\u62df\u7f51\u7edc\u4e2d\u3002\u4f60\u53ef\u4ee5\u81ea\u5df1\u8bbe\u7f6e\u4e00\u4e2a VPC\uff0c\u5e76\u5728 Rancher \u4e2d\u521b\u5efa\u96c6\u7fa4\u65f6\u63d0\u4f9b\u5b83\u3002\u5982\u679c\u4f60\u521b\u5efa\u8fc7\u7a0b\u4e2d\u6ca1\u6709\u63d0\u4f9b\uff0cRancher \u5c06\u521b\u5efa\u4e00\u4e2a VPC\u3002\u8be6\u60c5\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-public-private-vpc.html"},"\u6559\u7a0b\uff1a\u4e3a\u4f60\u7684 Amazon EKS \u96c6\u7fa4\u521b\u5efa\u5177\u6709\u516c\u6709\u548c\u79c1\u6709\u5b50\u7f51\u7684 VPC"),"\u3002"),(0,a.kt)("h3",{id:"iam-\u7b56\u7565"},"IAM \u7b56\u7565"),(0,a.kt)("p",null,"Rancher \u9700\u8981\u8bbf\u95ee\u4f60\u7684 AWS \u8d26\u6237\u624d\u80fd\u5728 Amazon EKS \u4e2d\u9884\u7f6e\u548c\u7ba1\u7406\u4f60\u7684 Kubernetes \u96c6\u7fa4\u3002\u4f60\u9700\u8981\u5728 AWS \u8d26\u6237\u4e2d\u4e3a Rancher \u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u5b9a\u4e49\u8be5\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u7684\u5185\u5bb9\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"\u6b64\u5904"),"\u7684\u6b65\u9aa4\u521b\u5efa\u5177\u6709\u7f16\u7a0b\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a IAM \u7b56\u7565\uff0c\u5b9a\u4e49\u8be5\u7528\u6237\u5728 AWS \u8d26\u6237\u4e2d\u6709\u6743\u8bbf\u95ee\u7684\u5185\u5bb9\u3002\u8bf7\u52a1\u5fc5\u4ec5\u6388\u4e88\u6b64\u7528\u6237\u6240\u9700\u7684\u6700\u5c0f\u8bbf\u95ee\u6743\u9650\u3002",(0,a.kt)("a",{parentName:"p",href:"#%E6%9C%80%E5%B0%8F-eks-%E6%9D%83%E9%99%90"},"\u6b64\u5904"),"\u5217\u51fa\u4e86 EKS \u96c6\u7fa4\u6240\u9700\u7684\u6700\u4f4e\u6743\u9650\u3002\u8bf7\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/EKS_IAM_user_policies.html"},"\u6b64\u5904"),"\u7684\u6b65\u9aa4\u521b\u5efa IAM \u7b56\u7565\u5e76\u5c06\u7b56\u7565\u7ed1\u5b9a\u5230\u4f60\u7684\u7528\u6237\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6700\u540e\uff0c\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"\u6b64\u5904"),"\u7684\u6b65\u9aa4\u4e3a\u8be5\u7528\u6237\u521b\u5efa\u8bbf\u95ee\u5bc6\u94a5\u548c\u5bc6\u6587\u5bc6\u94a5\u3002"))),(0,a.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5b9a\u671f\u8f6e\u6362\u8bbf\u95ee\u5bc6\u94a5\u548c\u5bc6\u6587\u5bc6\u94a5\u975e\u5e38\u91cd\u8981\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6b64",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#rotating_access_keys_console"},"\u6587\u6863"),"\u3002")),(0,a.kt)("p",null,"\u6709\u5173 EKS \u7684 IAM \u7b56\u7565\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/IAM_policies.html"},"Amazon EKS IAM \u7b56\u7565\u3001\u89d2\u8272\u548c\u6743\u9650\u7684\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa-eks-\u96c6\u7fa4"},"\u521b\u5efa EKS \u96c6\u7fa4"),(0,a.kt)("p",null,"\u4f7f\u7528 Rancher \u914d\u7f6e\u4f60\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Amazon EKS"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,a.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,a.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u8868\u5355\u7684\u5176\u4f59\u90e8\u5206\u3002\u5982\u9700\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"#eks-%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E5%8F%82%E8%80%83"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,a.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,a.kt)("h2",{id:"eks-\u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"},"EKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),(0,a.kt)("p",null,"\u6709\u5173 EKS \u96c6\u7fa4\u914d\u7f6e\u9009\u9879\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,a.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86 Rancher 2.x \u7684\u4e0a\u5c42\u67b6\u6784\u3002\u4e0b\u56fe\u4e2d\uff0cRancher Server \u7ba1\u7406\u4e24\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u5176\u4e2d\u4e00\u4e2a\u7531 RKE \u521b\u5efa\uff0c\u53e6\u4e00\u4e2a\u7531 EKS \u521b\u5efa\u3002"),(0,a.kt)("figcaption",null,"\u901a\u8fc7 Rancher \u7684\u8ba4\u8bc1\u4ee3\u7406\u7ba1\u7406 Kubernetes \u96c6\u7fa4"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u67b6\u6784",src:n(16904).Z,width:"766",height:"792"})),(0,a.kt)("h2",{id:"aws-\u670d\u52a1\u4e8b\u4ef6"},"AWS \u670d\u52a1\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u6709\u5173 AWS \u670d\u52a1\u4e8b\u4ef6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://status.aws.amazon.com/"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h2",{id:"\u5b89\u5168\u4e0e\u5408\u89c4"},"\u5b89\u5168\u4e0e\u5408\u89c4"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709\u521b\u5efa\u96c6\u7fa4\u7684 IAM \u7528\u6237\u6216\u89d2\u8272\u624d\u80fd\u8bbf\u95ee\u8be5\u96c6\u7fa4\u3002\u5728\u6ca1\u6709\u989d\u5916\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u5176\u4ed6\u7528\u6237\u6216\u89d2\u8272\u8bbf\u95ee\u96c6\u7fa4\u5c06\u5bfc\u81f4\u9519\u8bef\u3002\u5728 Rancher \u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u4f7f\u7528\u6620\u5c04\u5230\u672a\u7528\u4e8e\u521b\u5efa\u96c6\u7fa4\u7684\u7528\u6237\u6216\u89d2\u8272\u7684\u51ed\u8bc1\uff0c\u5bfc\u81f4\u672a\u7ecf\u6388\u6743\u7684\u9519\u8bef\u3002\u9664\u975e\u7528\u4e8e\u6ce8\u518c\u96c6\u7fa4\u7684\u51ed\u8bc1\u4e0e EKSCtl \u4f7f\u7528\u7684\u89d2\u8272\u6216\u7528\u6237\u5339\u914d\uff0c\u5426\u5219 EKSCtl \u96c6\u7fa4\u5c06\u4e0d\u4f1a\u6ce8\u518c\u5230 Rancher\u3002\u901a\u8fc7\u5c06\u5176\u4ed6\u7528\u6237\u548c\u89d2\u8272\u6dfb\u52a0\u5230 kube-system \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 aws-auth configmap\uff0c\u53ef\u4ee5\u6388\u6743\u5176\u4ed6\u7528\u6237\u548c\u89d2\u8272\u8bbf\u95ee\u96c6\u7fa4\u3002\u5982\u9700\u66f4\u6df1\u5165\u7684\u89e3\u91ca\u548c\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u6b64",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/amazon-eks-cluster-access/"},"\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u6709\u5173 Amazon EKS Kubernetes \u96c6\u7fa4\u7684\u5b89\u5168\u6027\u548c\u5408\u89c4\u6027\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6b64",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/shared-responsibilty.html"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,a.kt)("p",null,"AWS \u5f00\u6e90\u535a\u5ba2\u4e0a\u7684\u8fd9\u7bc7",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/managing-eks-clusters-rancher/"},"\u6559\u7a0b"),"\u5c06\u6307\u5bfc\u4f60\u4f7f\u7528 Rancher \u8bbe\u7f6e\u4e00\u4e2a EKS \u96c6\u7fa4\uff0c\u90e8\u7f72\u4e00\u4e2a\u53ef\u516c\u5f00\u8bbf\u95ee\u7684\u793a\u4f8b\u5e94\u7528\u6765\u6d4b\u8bd5\u96c6\u7fa4\uff0c\u5e76\u90e8\u7f72\u4e00\u4e2a\u4f7f\u7528\u5176\u4ed6\u5f00\u6e90\u8f6f\u4ef6\uff08\u5982 Grafana \u548c influxdb\uff09\u6765\u5b9e\u65f6\u76d1\u63a7\u5730\u7406\u4fe1\u606f\u7684\u793a\u4f8b\u9879\u76ee\u3002"),(0,a.kt)("h2",{id:"\u6700\u5c0f-eks-\u6743\u9650"},"\u6700\u5c0f EKS \u6743\u9650"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u662f\u8bbf\u95ee Rancher EKS \u9a71\u52a8\u7a0b\u5e8f\u7684\u5168\u90e8\u529f\u80fd\u6240\u9700\u7684\u6700\u4f4e\u6743\u9650\u96c6\u3002\u4f60\u9700\u8981 Rancher \u7684\u5176\u4ed6\u6743\u9650\u624d\u80fd\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Role")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"VPC")," \u8d44\u6e90\u3002\u5982\u679c\u4f60\u5728\u521b\u5efa\u96c6\u7fa4",(0,a.kt)("strong",{parentName:"p"},"\u4e4b\u524d"),"\u521b\u5efa\u4e86\u8fd9\u4e9b\u8d44\u6e90\uff0c\u4f60\u5728\u914d\u7f6e\u96c6\u7fa4\u65f6\u5c06\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u89d2\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u5141\u8bb8 Kubernetes \u4ee3\u8868\u4f60\u7ba1\u7406\u8d44\u6e90\u7684\u6743\u9650\u3002Rancher \u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b",(0,a.kt)("a",{parentName:"td",href:"#%E6%9C%8D%E5%8A%A1%E8%A7%92%E8%89%B2%E6%9D%83%E9%99%90"},"\u670d\u52a1\u89d2\u8272\u6743\u9650"),"\u6765\u521b\u5efa\u670d\u52a1\u89d2\u8272\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VPC"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b EKS \u548c Worker \u8282\u70b9\u4f7f\u7528\u7684\u9694\u79bb\u7f51\u7edc\u8d44\u6e90\u3002Rancher \u4f7f\u7528\u4ee5\u4e0b ",(0,a.kt)("a",{parentName:"td",href:"#vpc-%E6%9D%83%E9%99%90"},"VPC \u6743\u9650"),"\u521b\u5efa VPC \u8d44\u6e90\u3002")))),(0,a.kt)("p",null,"\u8d44\u6e90\u5b9a\u4f4d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," \u4f5c\u4e3a\u5728 Rancher \u4e2d\u521b\u5efa EKS \u96c6\u7fa4\u4e4b\u524d\uff0c\u65e0\u6cd5\u5df2\u77e5\u521b\u5efa\u7684\u8d44\u6e90\u7684\u540d\u79f0\uff08ARN\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "EC2Permisssions",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances",\n                "ec2:RevokeSecurityGroupIngress",\n                "ec2:RevokeSecurityGroupEgress",\n                "ec2:DescribeInstanceTypes",\n                "ec2:DescribeRegions",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeTags",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeLaunchTemplateVersions",\n                "ec2:DescribeLaunchTemplates",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeImages",\n                "ec2:DescribeAvailabilityZones",\n                "ec2:DescribeAccountAttributes",\n                "ec2:DeleteTags",\n                "ec2:DeleteSecurityGroup",\n                "ec2:DeleteKeyPair",\n                "ec2:CreateTags",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateLaunchTemplateVersion",\n                "ec2:CreateLaunchTemplate",\n                "ec2:CreateKeyPair",\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:AuthorizeSecurityGroupEgress"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "CloudFormationPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "cloudformation:ListStacks",\n                "cloudformation:ListStackResources",\n                "cloudformation:DescribeStacks",\n                "cloudformation:DescribeStackResources",\n                "cloudformation:DescribeStackResource",\n                "cloudformation:DeleteStack",\n                "cloudformation:CreateStackSet",\n                "cloudformation:CreateStack"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "IAMPermissions",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "iam:ListRoles",\n                "iam:ListRoleTags",\n                "iam:ListInstanceProfilesForRole",\n                "iam:ListInstanceProfiles",\n                "iam:ListAttachedRolePolicies",\n                "iam:GetRole",\n                "iam:GetInstanceProfile",\n                "iam:DetachRolePolicy",\n                "iam:DeleteRole",\n                "iam:CreateRole",\n                "iam:AttachRolePolicy"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "KMSPermisssions",\n            "Effect": "Allow",\n            "Action": "kms:ListKeys",\n            "Resource": "*"\n        },\n        {\n            "Sid": "EKSPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "eks:UpdateNodegroupVersion",\n                "eks:UpdateNodegroupConfig",\n                "eks:UpdateClusterVersion",\n                "eks:UpdateClusterConfig",\n                "eks:UntagResource",\n                "eks:TagResource",\n                "eks:ListUpdates",\n                "eks:ListTagsForResource",\n                "eks:ListNodegroups",\n                "eks:ListFargateProfiles",\n                "eks:ListClusters",\n                "eks:DescribeUpdate",\n                "eks:DescribeNodegroup",\n                "eks:DescribeFargateProfile",\n                "eks:DescribeCluster",\n                "eks:DeleteNodegroup",\n                "eks:DeleteFargateProfile",\n                "eks:DeleteCluster",\n                "eks:CreateNodegroup",\n                "eks:CreateFargateProfile",\n                "eks:CreateCluster"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u670d\u52a1\u89d2\u8272\u6743\u9650"},"\u670d\u52a1\u89d2\u8272\u6743\u9650"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u662f EK\u200b\u200bS \u96c6\u7fa4\u521b\u5efa\u671f\u95f4\u6240\u9700\u7684\u6743\u9650\uff0c\u4ee5\u4fbf Rancher \u53ef\u4ee5\u4ee3\u8868\u7528\u6237\u521b\u5efa\u670d\u52a1\u89d2\u8272\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "IAMPermisssions",\n      "Effect": "Allow",\n      "Action": [\n        "iam:AddRoleToInstanceProfile",\n        "iam:AttachRolePolicy",\n        "iam:CreateInstanceProfile",\n        "iam:CreateRole",\n        "iam:CreateServiceLinkedRole",\n        "iam:DeleteInstanceProfile",\n        "iam:DeleteRole",\n        "iam:DetachRolePolicy",\n        "iam:GetInstanceProfile",\n        "iam:GetRole",\n        "iam:ListAttachedRolePolicies",\n        "iam:ListInstanceProfiles",\n        "iam:ListInstanceProfilesForRole",\n        "iam:ListRoles",\n        "iam:ListRoleTags",\n        "iam:PassRole",\n        "iam:RemoveRoleFromInstanceProfile"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"\u5f53\u4f60\u521b\u5efa EKS \u96c6\u7fa4\u65f6\uff0cRancher \u4f1a\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u4ee5\u4e0b\u4fe1\u4efb\u7b56\u7565\u7684\u670d\u52a1\u89d2\u8272\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": "sts:AssumeRole",\n      "Principal": {\n        "Service": "eks.amazonaws.com"\n      },\n      "Effect": "Allow",\n      "Sid": ""\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"\u6b64\u89d2\u8272\u8fd8\u6709\u4e24\u4e2a\u89d2\u8272\u7b56\u7565\uff0c\u5b83\u4eec\u5177\u6709\u4ee5\u4e0b\u7b56\u7565\u7684 ARN\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"arn:aws:iam::aws:policy/AmazonEKSClusterPolicy\narn:aws:iam::aws:policy/AmazonEKSServicePolicy\n")),(0,a.kt)("h3",{id:"vpc-\u6743\u9650"},"VPC \u6743\u9650"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u662f Rancher \u521b\u5efa\u865a\u62df\u79c1\u6709\u4e91 (VPC) \u548c\u76f8\u5173\u8d44\u6e90\u6240\u9700\u7684\u6743\u9650\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VPCPermissions",\n      "Effect": "Allow",\n      "Action": [\n        "ec2:ReplaceRoute",\n        "ec2:ModifyVpcAttribute",\n        "ec2:ModifySubnetAttribute",\n        "ec2:DisassociateRouteTable",\n        "ec2:DetachInternetGateway",\n        "ec2:DescribeVpcs",\n        "ec2:DeleteVpc",\n        "ec2:DeleteTags",\n        "ec2:DeleteSubnet",\n        "ec2:DeleteRouteTable",\n        "ec2:DeleteRoute",\n        "ec2:DeleteInternetGateway",\n        "ec2:CreateVpc",\n        "ec2:CreateSubnet",\n        "ec2:CreateSecurityGroup",\n        "ec2:CreateRouteTable",\n        "ec2:CreateRoute",\n        "ec2:CreateInternetGateway",\n        "ec2:AttachInternetGateway",\n        "ec2:AssociateRouteTable"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,a.kt)("p",null,"EKS \u914d\u7f6e\u8005\u53ef\u4ee5\u5728 Rancher \u548c\u63d0\u4f9b\u5546\u4e4b\u95f4\u540c\u6b65 EKS \u96c6\u7fa4\u7684\u72b6\u6001\u3002\u6709\u5173\u5176\u5de5\u4f5c\u539f\u7406\u7684\u6280\u672f\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"\u540c\u6b65"),"\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u914d\u7f6e\u5237\u65b0\u95f4\u9694\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration#%E9%85%8D%E7%BD%AE%E5%88%B7%E6%96%B0%E9%97%B4%E9%9A%94"},"\u672c\u8282"),"\u3002"),(0,a.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u66f4\u6539\u88ab\u8986\u76d6\uff0c\u53ef\u80fd\u662f\u96c6\u7fa4\u6570\u636e\u4e0e EKS \u540c\u6b65\u7684\u65b9\u5f0f\u5bfc\u81f4\u7684\u3002\u4e0d\u8981\u5728\u4f7f\u7528\u5176\u4ed6\u6e90\uff08\u4f8b\u5982 EKS \u63a7\u5236\u53f0\uff09\u5bf9\u96c6\u7fa4\u8fdb\u884c\u66f4\u6539\u540e\uff0c\u53c8\u5728\u4e94\u5206\u949f\u4e4b\u5185\u5728 Rancher \u4e2d\u8fdb\u884c\u66f4\u6539\u3002\u6709\u5173\u5176\u5de5\u4f5c\u539f\u7406\uff0c\u4ee5\u53ca\u5982\u4f55\u914d\u7f6e\u5237\u65b0\u95f4\u9694\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"#%E5%90%8C%E6%AD%A5"},"\u540c\u6b65"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5728\u4fee\u6539\u6216\u6ce8\u518c\u96c6\u7fa4\u65f6\u8fd4\u56de\u672a\u7ecf\u6388\u6743\u7684\u9519\u8bef\uff0c\u5e76\u4e14\u96c6\u7fa4\u4e0d\u662f\u4f7f\u7528\u4f60\u7684\u51ed\u8bc1\u6240\u5c5e\u7684\u89d2\u8272\u6216\u7528\u6237\u521b\u5efa\u7684\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"#%E5%AE%89%E5%85%A8%E4%B8%8E%E5%90%88%E8%A7%84"},"\u5b89\u5168\u4e0e\u5408\u89c4"),"\u3002"),(0,a.kt)("p",null,"\u6709\u5173 Amazon EKS Kubernetes \u96c6\u7fa4\u7684\u4efb\u4f55\u95ee\u9898\u6216\u6545\u969c\u6392\u9664\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6b64",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting.html"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-eks-\u96c6\u7fa4"},"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa EKS \u96c6\u7fa4"),(0,a.kt)("p",null,"\u901a\u8fc7 Rancher \u4ee5\u7f16\u7a0b\u65b9\u5f0f\u90e8\u7f72 EKS \u96c6\u7fa4\u7684\u6700\u5e38\u89c1\u65b9\u6cd5\u662f\u4f7f\u7528 Rancher 2 Terraform Provider\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"\u4f7f\u7528 Terraform \u521b\u5efa\u96c6\u7fa4"),"\u3002"))}p.isMDXComponent=!0},16904:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"}}]);