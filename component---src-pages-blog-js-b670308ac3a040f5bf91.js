(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{239:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(232),s=a(36),i=(a(240),function(e){var t=e.post;return n.a.createElement("div",{className:"PostLink"},n.a.createElement("span",{className:"PostLink__LinkWrapper"},n.a.createElement(s.a,{className:"PostLink__Link",to:t.fields.slug},n.a.createElement("div",{className:"PostLink__Title"},t.frontmatter.title),n.a.createElement("div",{className:"PostLink__Excerpt"},"false"!==t.frontmatter.excerpt?t.frontmatter.excerpt||t.excerpt:""))))});a(241);a.d(t,"pageQuery",(function(){return c}));var l=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={query:""},a.handleChange=a.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=r.prototype;return s.handleChange=function(e){this.setState({query:e.target.value})},s.filter=function(e){return!this.state.query||(e.node.frontmatter.title.toLowerCase().indexOf(this.state.query.toLowerCase())>=0||e.node.frontmatter.excerpt.toLowerCase().indexOf(this.state.query.toLowerCase())>=0)},s.render=function(){var e=this,t=this.props.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).filter((function(t){return e.filter(t)})).map((function(e){return n.a.createElement(i,{key:e.node.id,post:e.node})}));return n.a.createElement(o.a,{colour:"millennial"},n.a.createElement("div",{className:"Blog"},n.a.createElement("div",{className:"Blog__SearchWrapper"},n.a.createElement("input",{className:"Blog__Search",type:"text",placeholder:"Filter ",value:this.state.query,onChange:this.handleChange})),n.a.createElement("div",{className:"Blog__Posts"},t)))},r}(n.a.Component),c=(t.default=l,"1718837987")}}]);
//# sourceMappingURL=component---src-pages-blog-js-b670308ac3a040f5bf91.js.map