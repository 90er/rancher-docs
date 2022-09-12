"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61497],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return p}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,m=d["".concat(i,".").concat(p)]||d[p]||h[p]||s;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32379:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],l={title:"Architecture Recommendations",weight:3},i=void 0,c={unversionedId:"reference-guides/rancher-manager-architecture/architecture-recommendations",id:"reference-guides/rancher-manager-architecture/architecture-recommendations",title:"Architecture Recommendations",description:"If you are installing Rancher on a single node, the main architecture recommendation that applies to your installation is that the node running Rancher should be separate from downstream clusters.",source:"@site/docs/reference-guides/rancher-manager-architecture/architecture-recommendations.md",sourceDirName:"reference-guides/rancher-manager-architecture",slug:"/reference-guides/rancher-manager-architecture/architecture-recommendations",permalink:"/reference-guides/rancher-manager-architecture/architecture-recommendations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-manager-architecture/architecture-recommendations.md",tags:[],version:"current",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Architecture Recommendations",weight:3},sidebar:"tutorialSidebar",previous:{title:"Communicating with Downstream User Clusters",permalink:"/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"},next:{title:"Cluster Configuration",permalink:"/pages-for-subheaders/cluster-configuration"}},u={},h=[{value:"K3s Kubernetes Cluster Installations",id:"k3s-kubernetes-cluster-installations",level:3},{value:"RKE Kubernetes Cluster Installations",id:"rke-kubernetes-cluster-installations",level:3},{value:"K3s Cluster Roles",id:"k3s-cluster-roles",level:3},{value:"RKE Cluster Roles",id:"rke-cluster-roles",level:3},{value:"Contrasting RKE Cluster Architecture for Rancher Server and for Downstream Kubernetes Clusters",id:"contrasting-rke-cluster-architecture-for-rancher-server-and-for-downstream-kubernetes-clusters",level:3}],d={toc:h};function p(e){var r=e.components,l=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,l,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are installing Rancher on a single node, the main architecture recommendation that applies to your installation is that the node running Rancher should be ",(0,s.kt)("a",{parentName:"p",href:"#separation-of-rancher-and-user-clusters"},"separate from downstream clusters.")),(0,s.kt)("h1",{id:"separation-of-rancher-and-user-clusters"},"Separation of Rancher and User Clusters"),(0,s.kt)("p",null,"A user cluster is a downstream Kubernetes cluster that runs your apps and services."),(0,s.kt)("p",null,"If you have a Docker installation of Rancher, the node running the Rancher server should be separate from your downstream clusters."),(0,s.kt)("p",null,"If Rancher is intended to manage downstream Kubernetes clusters, the Kubernetes cluster that the Rancher server runs on should also be separate from the downstream user clusters."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Separation of Rancher Server from User Clusters",src:t(52690).Z,width:"827",height:"595"})),(0,s.kt)("h1",{id:"why-ha-is-better-for-rancher-in-production"},"Why HA is Better for Rancher in Production"),(0,s.kt)("p",null,"We recommend installing the Rancher server on a high-availability Kubernetes cluster, primarily because it protects the Rancher server data. In a high-availability installation, a load balancer serves as the single point of contact for clients, distributing network traffic across multiple servers in the cluster and helping to prevent any one server from becoming a point of failure."),(0,s.kt)("p",null,"We don't recommend installing Rancher in a single Docker container, because if the node goes down, there is no copy of the cluster data available on other nodes and you could lose the data on your Rancher server."),(0,s.kt)("h3",{id:"k3s-kubernetes-cluster-installations"},"K3s Kubernetes Cluster Installations"),(0,s.kt)("p",null,"One option for the underlying Kubernetes cluster is to use K3s Kubernetes. K3s is Rancher's CNCF certified Kubernetes distribution. It is easy to install and uses half the memory of Kubernetes, all in a binary of less than 100 MB. Another advantage of K3s is that it allows an external datastore to hold the cluster data, allowing the K3s server nodes to be treated as ephemeral."),(0,s.kt)("figcaption",null,"Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server"),"![Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server](/img/k3s-server-storage.svg)",(0,s.kt)("h3",{id:"rke-kubernetes-cluster-installations"},"RKE Kubernetes Cluster Installations"),(0,s.kt)("p",null,"In an RKE installation, the cluster data is replicated on each of three etcd nodes in the cluster, providing redundancy and data duplication in case one of the nodes fails."),(0,s.kt)("figcaption",null,"Architecture of an RKE Kubernetes Cluster Running the Rancher Management Server"),"![Architecture of an RKE Kubernetes cluster running the Rancher management server](/img/rke-server-storage.svg)",(0,s.kt)("h1",{id:"recommended-load-balancer-configuration-for-kubernetes-installations"},"Recommended Load Balancer Configuration for Kubernetes Installations"),(0,s.kt)("p",null,"We recommend the following configurations for the load balancer and Ingress controllers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The DNS for Rancher should resolve to a Layer 4 load balancer (TCP)."),(0,s.kt)("li",{parentName:"ul"},"The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster."),(0,s.kt)("li",{parentName:"ul"},"The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443."),(0,s.kt)("li",{parentName:"ul"},"The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.")),(0,s.kt)("figcaption",null,"Rancher installed on a Kubernetes cluster with layer 4 load balancer, depicting SSL termination at Ingress controllers"),"![Rancher HA](/img/ha/rancher2ha.svg)",(0,s.kt)("h1",{id:"environment-for-kubernetes-installations"},"Environment for Kubernetes Installations"),(0,s.kt)("p",null,"It is strongly recommended to install Rancher on a Kubernetes cluster on hosted infrastructure such as Amazon's EC2 or Google Compute Engine."),(0,s.kt)("p",null,"For the best performance and greater security, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads."),(0,s.kt)("h1",{id:"recommended-node-roles-for-kubernetes-installations"},"Recommended Node Roles for Kubernetes Installations"),(0,s.kt)("p",null,"The below recommendations apply when Rancher is installed on a K3s Kubernetes cluster or an RKE Kubernetes cluster."),(0,s.kt)("h3",{id:"k3s-cluster-roles"},"K3s Cluster Roles"),(0,s.kt)("p",null,"In K3s clusters, there are two types of nodes: server nodes and agent nodes. Both servers and agents can have workloads scheduled on them. Server nodes run the Kubernetes master."),(0,s.kt)("p",null,"For the cluster running the Rancher management server, we recommend using two server nodes. Agent nodes are not required."),(0,s.kt)("h3",{id:"rke-cluster-roles"},"RKE Cluster Roles"),(0,s.kt)("p",null,"If Rancher is installed on an RKE Kubernetes cluster, the cluster should have three nodes, and each node should have all three Kubernetes roles: etcd, controlplane, and worker."),(0,s.kt)("h3",{id:"contrasting-rke-cluster-architecture-for-rancher-server-and-for-downstream-kubernetes-clusters"},"Contrasting RKE Cluster Architecture for Rancher Server and for Downstream Kubernetes Clusters"),(0,s.kt)("p",null,"Our recommendation for RKE node roles on the Rancher server cluster contrasts with our recommendations for the downstream user clusters that run your apps and services."),(0,s.kt)("p",null,"Rancher uses RKE as a library when provisioning downstream Kubernetes clusters. Note: The capability to provision downstream K3s clusters will be added in a future version of Rancher."),(0,s.kt)("p",null,"For downstream Kubernetes clusters, we recommend that each node in a user cluster should have a single role for stability and scalability."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Kubernetes Roles for Nodes in Rancher Server Cluster vs. User Clusters",src:t(663).Z,width:"801",height:"411"})),(0,s.kt)("p",null,"RKE only requires at least one node with each role and does not require nodes to be restricted to one role. However, for the clusters that run your apps, we recommend separate roles for each node so that workloads on worker nodes don't interfere with the Kubernetes master or cluster data as your services scale."),(0,s.kt)("p",null,"We recommend that downstream user clusters should have at least:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Three nodes with only the etcd role")," to maintain a quorum if one node is lost, making the state of your cluster highly available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Two nodes with only the controlplane role")," to make the master component highly available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"One or more nodes with only the worker role")," to run the Kubernetes node components, as well as the workloads for your apps and services")),(0,s.kt)("p",null,"With that said, it is safe to use all three roles on three nodes when setting up the Rancher server because:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It allows one ",(0,s.kt)("inlineCode",{parentName:"li"},"etcd")," node failure."),(0,s.kt)("li",{parentName:"ul"},"It maintains multiple instances of the master components by having multiple ",(0,s.kt)("inlineCode",{parentName:"li"},"controlplane")," nodes."),(0,s.kt)("li",{parentName:"ul"},"No other workloads than Rancher itself should be created on this cluster.")),(0,s.kt)("p",null,"Because no additional workloads will be deployed on the Rancher server cluster, in most cases it is not necessary to use the same architecture that we recommend for the scalability and reliability of downstream clusters."),(0,s.kt)("p",null,"For more best practices for downstream clusters, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/checklist-for-production-ready-clusters"},"production checklist")," or our ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/best-practices"},"best practices guide.")),(0,s.kt)("h1",{id:"architecture-for-an-authorized-cluster-endpoint-ace"},"Architecture for an Authorized Cluster Endpoint (ACE)"),(0,s.kt)("p",null,"If you are using an ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint (ACE),")," we recommend creating an FQDN pointing to a load balancer which balances traffic across your nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,s.kt)("p",null,"If you are using private CA signed certificates on the load balancer, you have to supply the CA certificate, which will be included in the generated kubeconfig file to validate the certificate chain. See the documentation on ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubeconfig files")," and ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/api-keys#creating-an-api-key"},"API keys")," for more information."),(0,s.kt)("p",null,"As of Rancher v2.6.3, ACE support is available for registered RKE2 and K3s clusters. To view the manual steps to perform on the downstream cluster to enable the ACE, click ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters"},"here"),"."))}p.isMDXComponent=!0},663:function(e,r,t){r.Z=t.p+"assets/images/rancher-architecture-node-roles-d119f0d32608589178cd9bf1375745cc.svg"},52690:function(e,r,t){r.Z=t.p+"assets/images/rancher-architecture-separation-of-rancher-server-b32508a12beee49d72836caa5469e585.svg"}}]);