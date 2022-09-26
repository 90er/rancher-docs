"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35885],{3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},o=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),h=l(t),k=a,d=h["".concat(i,".").concat(k)]||h[k]||p[k]||c;return t?n.createElement(d,u(u({ref:r},o),{},{components:t})):n.createElement(d,u({ref:r},o))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,u=new Array(c);u[0]=h;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<c;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},39686:function(e,r,t){t.r(r),t.d(r,{assets:function(){return o},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),u=["components"],s={title:"\u5b89\u5168",weight:20,aliases:["/rancher/v2.x/en/security/"]},i=void 0,l={unversionedId:"pages-for-subheaders/rancher-security",id:"pages-for-subheaders/rancher-security",title:"\u5b89\u5168",description:"\u5b89\u5168\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/rancher-security.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-security",permalink:"/zh/pages-for-subheaders/rancher-security",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/rancher-security.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u5b89\u5168",weight:20,aliases:["/rancher/v2.x/en/security/"]},sidebar:"tutorialSidebar",previous:{title:"\u793a\u4f8b YAML \u6587\u4ef6",permalink:"/zh/reference-guides/pipelines/example-yaml"},next:{title:"Rancher 2.6 \u7684\u81ea\u6211\u8bc4\u4f30\u548c\u5f3a\u5316\u6307\u5357",permalink:"/zh/pages-for-subheaders/rancher-v2.6-hardening-guides"}},o={},p=[{value:"NeuVector \u4e0e Rancher \u7684\u96c6\u6210",id:"neuvector-\u4e0e-rancher-\u7684\u96c6\u6210",level:3},{value:"\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u8fd0\u884c CIS \u5b89\u5168\u626b\u63cf",id:"\u5728-kubernetes-\u96c6\u7fa4\u4e0a\u8fd0\u884c-cis-\u5b89\u5168\u626b\u63cf",level:3},{value:"SELinux RPM",id:"selinux-rpm",level:3},{value:"Rancher \u5f3a\u5316\u6307\u5357",id:"rancher-\u5f3a\u5316\u6307\u5357",level:3},{value:"CIS Benchmark \u548c\u81ea\u6211\u8bc4\u4f30",id:"cis-benchmark-\u548c\u81ea\u6211\u8bc4\u4f30",level:3},{value:"\u7b2c\u4e09\u65b9\u6e17\u900f\u6d4b\u8bd5\u62a5\u544a",id:"\u7b2c\u4e09\u65b9\u6e17\u900f\u6d4b\u8bd5\u62a5\u544a",level:3},{value:"Rancher \u5b89\u5168\u516c\u544a\u548c CVE",id:"rancher-\u5b89\u5168\u516c\u544a\u548c-cve",level:3},{value:"Kubernetes \u5b89\u5168\u6700\u4f73\u5b9e\u8df5",id:"kubernetes-\u5b89\u5168\u6700\u4f73\u5b9e\u8df5",level:3}],h={toc:p};function k(e){var r=e.components,t=(0,a.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("table",{width:"100%"},(0,c.kt)("tr",{style:{verticalAlign:"top"}},(0,c.kt)("td",{width:"30%",style:{border:"none"}},(0,c.kt)("h4",null,"\u5b89\u5168\u7b56\u7565"),(0,c.kt)("p",{style:{padding:"8px"}},"Rancher Labs \u4f1a\u8d1f\u8d23\u4efb\u5730\u62ab\u9732\u95ee\u9898\uff0c\u5e76\u81f4\u529b\u4e8e\u5728\u5408\u7406\u7684\u65f6\u95f4\u5185\u89e3\u51b3\u6240\u6709\u95ee\u9898\u3002 ")),(0,c.kt)("td",{width:"30%",style:{border:"none"}},(0,c.kt)("h4",null,"\u62a5\u544a\u8fc7\u7a0b"),(0,c.kt)("p",{style:{padding:"8px"}},"\u8bf7\u5c06\u5b89\u5168\u95ee\u9898\u53d1\u9001\u81f3 ",(0,c.kt)("a",{href:"mailto:security-rancher@suse.com"},"security-rancher@suse.com"),"\u3002")),(0,c.kt)("td",{width:"30%",style:{border:"none"}},(0,c.kt)("h4",null,"\u516c\u544a"),(0,c.kt)("p",{style:{padding:"8px"}},"\u8ba2\u9605 ",(0,c.kt)("a",{href:"https://forums.rancher.com/c/announcements"},"Rancher \u516c\u544a\u8bba\u575b"),"\u4ee5\u83b7\u53d6\u7248\u672c\u66f4\u65b0\u3002")))),(0,c.kt)("p",null,"\u5b89\u5168\u662f Rancher \u5168\u90e8\u529f\u80fd\u7684\u57fa\u7840\u3002Rancher \u96c6\u6210\u4e86\u5168\u90e8\u4e3b\u6d41\u8eab\u4efd\u9a8c\u8bc1\u5de5\u5177\u548c\u670d\u52a1\uff0c\u5e76\u63d0\u4f9b\u4e86\u4f01\u4e1a\u7ea7\u7684 ",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC \u529f\u80fd"),"\uff0c\u8ba9\u4f60\u7684 Kubernetes \u96c6\u7fa4\u66f4\u52a0\u5b89\u5168\u3002"),(0,c.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5b89\u5168\u76f8\u5173\u7684\u6587\u6863\u4ee5\u53ca\u8d44\u6e90\uff0c\u8ba9\u4f60\u7684 Rancher \u5b89\u88c5\u548c\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u66f4\u52a0\u5b89\u5168\u3002"),(0,c.kt)("h3",{id:"neuvector-\u4e0e-rancher-\u7684\u96c6\u6210"},"NeuVector \u4e0e Rancher \u7684\u96c6\u6210"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"2.6.5 \u7684\u65b0\u529f\u80fd")),(0,c.kt)("p",null,"NeuVector \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u4ee5\u5bb9\u5668\u4e3a\u4e2d\u5fc3\u7684\u5b89\u5168\u5e94\u7528\u7a0b\u5e8f\uff0c\u73b0\u5df2\u96c6\u6210\u5230 Rancher \u4e2d\u3002NeuVector \u63d0\u4f9b\u751f\u4ea7\u5b89\u5168\u3001DevOps \u6f0f\u6d1e\u4fdd\u62a4\u548c\u5bb9\u5668\u9632\u706b\u5899\u7b49\u529f\u80fd\u3002\u8bf7\u53c2\u9605 ",(0,c.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/neuvector"},"Rancher \u6587\u6863"),"\u548c ",(0,c.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"NeuVector \u6587\u6863"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,c.kt)("h3",{id:"\u5728-kubernetes-\u96c6\u7fa4\u4e0a\u8fd0\u884c-cis-\u5b89\u5168\u626b\u63cf"},"\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u8fd0\u884c CIS \u5b89\u5168\u626b\u63cf"),(0,c.kt)("p",null,"Rancher \u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/kube-bench"},"kube-bench")," \u6765\u8fd0\u884c\u5b89\u5168\u626b\u63cf\uff0c\u4ece\u800c\u68c0\u67e5 Kubernetes \u662f\u5426\u6309\u7167 ",(0,c.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/cis-benchmarks/"},"CIS"),"\uff08Center for Internet Security\uff0c\u4e92\u8054\u7f51\u5b89\u5168\u4e2d\u5fc3\uff09Kubernetes Benchmark \u4e2d\u5b9a\u4e49\u7684\u5b89\u5168\u6700\u4f73\u5b9e\u8df5\u8fdb\u884c\u90e8\u7f72\u3002"),(0,c.kt)("p",null,"CIS Kubernetes Benchmark \u662f\u4e00\u4e2a\u53c2\u8003\u6587\u6863\uff0c\u7528\u4e8e\u4e3a Kubernetes \u5efa\u7acb\u5b89\u5168\u914d\u7f6e\u57fa\u7ebf\u3002"),(0,c.kt)("p",null,"CIS \u662f\u4e00\u4e2a 501(c",")","(3) \u975e\u8425\u5229\u7ec4\u7ec7\uff0c\u6210\u7acb\u4e8e 2000 \u5e74 10 \u6708\uff0c\u5176\u4f7f\u547d\u662f\u8bc6\u522b\u3001\u5f00\u53d1\u3001\u9a8c\u8bc1\u3001\u4fc3\u8fdb\u548c\u7ef4\u6301\u7f51\u7edc\u9632\u5fa1\u7684\u6700\u4f73\u5b9e\u8df5\u65b9\u6848\uff0c\u5e76\u5efa\u7acb\u548c\u6307\u5bfc\u793e\u533a\uff0c\u4ee5\u5728\u7f51\u7edc\u7a7a\u95f4\u4e2d\u8425\u9020\u4fe1\u4efb\u7684\u73af\u5883\u3002"),(0,c.kt)("p",null,"CIS Benchmark \u662f\u76ee\u6807\u7cfb\u7edf\u5b89\u5168\u914d\u7f6e\u7684\u6700\u4f73\u5b9e\u8df5\u3002CIS Benchmark \u662f\u7531\u5b89\u5168\u4e13\u5bb6\u3001\u6280\u672f\u4f9b\u5e94\u5546\u3001\u516c\u5f00\u548c\u79c1\u4eba\u793e\u533a\u6210\u5458\uff0c\u4ee5\u53ca CIS Benchmark \u5f00\u53d1\u56e2\u961f\u5171\u540c\u5fd7\u613f\u5f00\u53d1\u7684\u3002"),(0,c.kt)("p",null,"Benchmark \u63d0\u4f9b\u4e24\u79cd\u7c7b\u578b\u7684\u5efa\u8bae\uff0c\u5206\u522b\u662f\u81ea\u52a8\uff08Automated\uff09\u548c\u624b\u52a8\uff08Manual\uff09\u3002\u6211\u4eec\u53ea\u8fd0\u884c Automated \u76f8\u5173\u7684\u6d4b\u8bd5\u3002"),(0,c.kt)("p",null,"Rancher \u5728\u96c6\u7fa4\u4e0a\u8fd0\u884c CIS \u5b89\u5168\u626b\u63cf\u65f6\u4f1a\u751f\u6210\u4e00\u4efd\u62a5\u544a\uff0c\u8be5\u62a5\u544a\u4f1a\u663e\u793a\u6bcf\u4e2a\u6d4b\u8bd5\u7684\u7ed3\u679c\uff0c\u5305\u62ec\u6d4b\u8bd5\u6982\u8981\u4ee5\u53ca ",(0,c.kt)("inlineCode",{parentName:"p"},"passed"),"\u3001",(0,c.kt)("inlineCode",{parentName:"p"},"skipped")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"failed")," \u7684\u6d4b\u8bd5\u6570\u91cf\u3002\u62a5\u544a\u8fd8\u5305\u62ec\u5931\u8d25\u6d4b\u8bd5\u7684\u4fee\u6b63\u6b65\u9aa4\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cis-scan-guides"},"\u5b89\u5168\u626b\u63cf"),"\u3002"),(0,c.kt)("h3",{id:"selinux-rpm"},"SELinux RPM"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"\u5b89\u5168\u589e\u5f3a\u578b Linux (SELinux)")," \u662f\u5bf9 Linux \u7684\u5b89\u5168\u589e\u5f3a\u3002\u88ab\u653f\u5e9c\u673a\u6784\u4f7f\u7528\u4e4b\u540e\uff0cSELinux \u5df2\u6210\u4e3a\u884c\u4e1a\u6807\u51c6\uff0c\u5e76\u5728 CentOS 7 \u548c 8 \u4e0a\u9ed8\u8ba4\u542f\u7528\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,c.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"rke2-selinux")," \u4e24\u4e2a RPM\uff08Red Hat \u8f6f\u4ef6\u5305\uff09\uff0c\u8ba9 Rancher \u4ea7\u54c1\u80fd\u591f\u5728 SELinux \u4e3b\u673a\u4e0a\u6b63\u5e38\u8fd0\u884c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/selinux-rpm"},"\u6b64\u9875\u9762"),"\u3002"),(0,c.kt)("h3",{id:"rancher-\u5f3a\u5316\u6307\u5357"},"Rancher \u5f3a\u5316\u6307\u5357"),(0,c.kt)("p",null,"Rancher \u5f3a\u5316\u6307\u5357\u57fa\u4e8e ",(0,c.kt)("a",{href:"https://www.cisecurity.org/benchmark/kubernetes/",target:"_blank"},"CIS Kubernetes Benchmark"),"\u3002"),(0,c.kt)("p",null,"\u5f3a\u5316\u6307\u5357\u4e3a\u5f3a\u5316 Rancher \u7684\u751f\u4ea7\u5b89\u88c5\u63d0\u4f9b\u4e86\u8bf4\u660e\u6027\u6307\u5bfc\u3002\u6709\u5173\u5b89\u5168\u7ba1\u63a7\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605 Rancher \u7684 ",(0,c.kt)("a",{parentName:"p",href:"#cis-benchmark-%E5%92%8C%E8%87%AA%E6%88%91%E8%AF%84%E4%BC%B0"},"CIS Kubernetes Benchmark\u81ea\u6211\u8bc4\u4f30\u6307\u5357"),"\u3002"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u5f3a\u5316\u6307\u5357\u63cf\u8ff0\u4e86\u5982\u4f55\u4fdd\u62a4\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\uff0c\u5efa\u8bae\u5728\u5b89\u88c5 Kubernetes \u4e4b\u524d\u53c2\u8003\u5f3a\u5316\u6307\u5357\u4e2d\u7684\u6b65\u9aa4\u3002")),(0,c.kt)("p",null,"\u6bcf\u4e2a\u5f3a\u5316\u6307\u5357\u7248\u672c\u90fd\u9488\u5bf9\u7279\u5b9a\u7684 CIS Kubernetes Benchmark\u3001Kubernetes \u548c Rancher \u7248\u672c\u3002"),(0,c.kt)("h3",{id:"cis-benchmark-\u548c\u81ea\u6211\u8bc4\u4f30"},"CIS Benchmark \u548c\u81ea\u6211\u8bc4\u4f30"),(0,c.kt)("p",null,"Benchmark \u81ea\u6211\u8bc4\u4f30\u662f Rancher \u5b89\u5168\u5f3a\u5316\u6307\u5357\u7684\u8f85\u52a9\u3002\u5f3a\u5316\u6307\u5357\u5c55\u793a\u4e86\u5982\u4f55\u5f3a\u5316\u96c6\u7fa4\uff0c\u800c Benchmark \u6307\u5357\u65e8\u5728\u5e2e\u52a9\u4f60\u8bc4\u4f30\u5f3a\u5316\u96c6\u7fa4\u7684\u5b89\u5168\u7ea7\u522b\u3002"),(0,c.kt)("p",null,"\u7531\u4e8e Rancher \u548c RKE \u5c06 Kubernetes \u670d\u52a1\u5b89\u88c5\u4e3a Docker \u5bb9\u5668\uff0c\u56e0\u6b64 CIS Kubernetes Benchmark \u4e2d\u7684\u8bb8\u591a\u7ba1\u63a7\u9a8c\u8bc1\u68c0\u67e5\u90fd\u4e0d\u9002\u7528\u3002\u672c\u6307\u5357\u5c06\u4ecb\u7ecd\u5404\u79cd\u7ba1\u63a7\uff0c\u5e76\u63d0\u4f9b\u66f4\u65b0\u7684\u793a\u4f8b\u547d\u4ee4\u6765\u5ba1\u6838 Rancher \u521b\u5efa\u7684\u96c6\u7fa4\u7684\u5408\u89c4\u6027\u3002\u4f60\u53ef\u4ee5\u524d\u5f80 ",(0,c.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/benchmark/kubernetes/"},"CIS \u7f51\u7ad9"),"\u4e0b\u8f7d\u539f\u59cb\u7684 Benchmark \u6587\u6863\u3002"),(0,c.kt)("p",null,"Rancher \u6bcf\u4e2a\u7248\u672c\u7684\u81ea\u6211\u8bc4\u4f30\u6307\u5357\u90fd\u5bf9\u5e94\u7279\u5b9a\u7684\u5f3a\u5316\u6307\u5357\u3001Rancher\u3001Kubernetes \u548c CIS Benchmark \u7248\u672c\u3002"),(0,c.kt)("h3",{id:"\u7b2c\u4e09\u65b9\u6e17\u900f\u6d4b\u8bd5\u62a5\u544a"},"\u7b2c\u4e09\u65b9\u6e17\u900f\u6d4b\u8bd5\u62a5\u544a"),(0,c.kt)("p",null,"Rancher \u4f1a\u5b9a\u671f\u8058\u8bf7\u7b2c\u4e09\u65b9\u5bf9 Rancher 2.x \u8f6f\u4ef6\u6808\u8fdb\u884c\u5b89\u5168\u5ba1\u6838\u548c\u6e17\u900f\u6d4b\u8bd5\u3002\u6d4b\u8bd5\u73af\u5883\u4f1a\u9075\u5faa Rancher \u63d0\u4f9b\u7684\u5f3a\u5316\u6307\u5357\u3002\u6d4b\u8bd5\u7ed3\u679c\u4f1a\u5728\u7b2c\u4e09\u65b9\u786e\u8ba4\u6211\u4eec\u5df2\u7ecf\u4fee\u590d\u4e86 MEDIUM \u6216\u4ee5\u4e0a\u7684\u95ee\u9898\u540e\u53d1\u5e03\u3002"),(0,c.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/RAN-01-cure53-report.final.pdf"},"Cure53 \u6e17\u900f\u6d4b\u8bd5 - 2019 \u5e74 7 \u6708")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/UntamedTheory-Rancher_SecurityAssessment-20190712_v5.pdf"},"Untamed Theory \u6e17\u900f\u6d4b\u8bd5 - 2019 \u5e74 3 \u6708"))),(0,c.kt)("h3",{id:"rancher-\u5b89\u5168\u516c\u544a\u548c-cve"},"Rancher \u5b89\u5168\u516c\u544a\u548c CVE"),(0,c.kt)("p",null,"Rancher \u81f4\u529b\u4e8e\u5411\u793e\u533a\u62ab\u9732\u6211\u4eec\u4ea7\u54c1\u7684\u5b89\u5168\u95ee\u9898\u3002\u6709\u5173\u6211\u4eec\u5df2\u89e3\u51b3\u95ee\u9898\u7684 CVE\uff08Common Vulnerabilities and Exposures\uff0c\u901a\u7528\u6f0f\u6d1e\u62ab\u9732\uff09\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/security-advisories-and-cves"},"\u6b64\u9875\u9762"),"\u3002"),(0,c.kt)("h3",{id:"kubernetes-\u5b89\u5168\u6700\u4f73\u5b9e\u8df5"},"Kubernetes \u5b89\u5168\u6700\u4f73\u5b9e\u8df5"),(0,c.kt)("p",null,"\u6709\u5173\u4fdd\u62a4 Kubernetes \u96c6\u7fa4\u7684\u5efa\u8bae\uff0c\u8bf7\u53c2\u9605 ",(0,c.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/kubernetes-security-best-practices"},"Kubernetes \u5b89\u5168\u6700\u4f73\u5b9e\u8df5\u6307\u5357"),"\u3002"))}k.isMDXComponent=!0}}]);