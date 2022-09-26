"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97773],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),o=["components"],i={title:"GlusterFS Volumes",weight:5e3,aliases:["/rancher/v2.x/en/cluster-admin/volumes-and-storage/glusterfs-volumes/"]},u=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",title:"GlusterFS Volumes",description:"This section only applies to RKE clusters.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"2022/8/19",frontMatter:{title:"GlusterFS Volumes",weight:5e3,aliases:["/rancher/v2.x/en/cluster-admin/volumes-and-storage/glusterfs-volumes/"]},sidebar:"tutorialSidebar",previous:{title:"Using an External Ceph Driver",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver"},next:{title:"iSCSI Volumes",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section only applies to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters."))),(0,a.kt)("p",null,"In clusters that store data on GlusterFS volumes, you may experience an issue where pods fail to mount volumes after restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),". The logging of the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," will show: ",(0,a.kt)("inlineCode",{parentName:"p"},"transport endpoint is not connected"),". To prevent this from happening, you can configure your cluster to mount the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-run")," binary in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," container. There are two requirements before you can change the cluster configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The node needs to have the ",(0,a.kt)("inlineCode",{parentName:"li"},"systemd-run")," binary installed (this can be checked by using the command ",(0,a.kt)("inlineCode",{parentName:"li"},"which systemd-run")," on each cluster node)"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"systemd-run")," binary needs to be compatible with Debian OS on which the hyperkube image is based (this can be checked using the following command on each cluster node, replacing the image tag with the Kubernetes version you want to use)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v /usr/bin/systemd-run:/usr/bin/systemd-run --entrypoint /usr/bin/systemd-run rancher/hyperkube:v1.16.2-rancher1 --version\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"Before updating your Kubernetes YAML to mount the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-run")," binary, make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," package is installed on your cluster nodes. If this package isn't installed ",(0,a.kt)("em",{parentName:"p"},"before")," the bind mounts are created in your Kubernetes YAML, Docker will automatically create the directories and files on each node and will not allow the package install to succeed.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_binds:\n      - "/usr/bin/systemd-run:/usr/bin/systemd-run"\n')),(0,a.kt)("p",null,"After the cluster has finished provisioning, you can check the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," container logging to see if the functionality is activated by looking for the following logline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Detected OS with systemd\n")))}m.isMDXComponent=!0}}]);