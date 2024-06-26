import { useSSRContext, mergeProps, toRefs, unref, createVNode, resolveDynamicComponent, onMounted, onUnmounted, computed, ref, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderSlot, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$b = {
  name: "HomeIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon home-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Home.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$a = {
  name: "ChairSchoolIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon chair-school-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M22,5V7H17L13.53,12H16V14H14.46L18.17,22H15.97L15.04,20H6.38L5.35,22H3.1L7.23,14H7C6.55,14 6.17,13.7 6.04,13.3L2.87,3.84L3.82,3.5C4.34,3.34 4.91,3.63 5.08,4.15L7.72,12H12.1L15.57,7H12V5H22M9.5,14L7.42,18H14.11L12.26,14H9.5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChairSchool.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ChairSchool = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$9 = {
  name: "LibraryIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon library-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,8A3,3 0 0,0 15,5A3,3 0 0,0 12,2A3,3 0 0,0 9,5A3,3 0 0,0 12,8M12,11.54C9.64,9.35 6.5,8 3,8V19C6.5,19 9.64,20.35 12,22.54C14.36,20.35 17.5,19 21,19V8C17.5,8 14.36,9.35 12,11.54Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Library.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Library = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {
  name: "AccountSchoolIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon account-school-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8L8.11 7.06L5 5.5L12 2L19 5.5V10.5H18V6L15.89 7.06L16 8M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountSchool.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AccountSchool = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {
  name: "BookPlusIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon book-plus-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/BookPlus.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const BookPlus = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  name: "BookMultipleIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon book-multiple-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,18H9A2,2 0 0,1 7,16V4A2,2 0 0,1 9,2H10V7L12,5.5L14,7V2H19A2,2 0 0,1 21,4V16A2,2 0 0,1 19,18M17,20V22H5A2,2 0 0,1 3,20V6H5V20H17Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/BookMultiple.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BookMultiple = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {
  __name: "SideNavItem",
  __ssrInlineRender: true,
  props: {
    openSideNav: Boolean,
    iconString: String
  },
  setup(__props) {
    const props = __props;
    const { openSideNav, iconString } = toRefs(props);
    let icon = null;
    if (iconString.value === "Головна")
      icon = Home;
    if (iconString.value === "Курси")
      icon = ChairSchool;
    if (iconString.value === "Моя бібліотека")
      icon = Library;
    if (iconString.value === "Керування учнями")
      icon = AccountSchool;
    if (iconString.value === "Створити курс")
      icon = BookPlus;
    if (iconString.value === "Керування курсами")
      icon = BookMultiple;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: [[!unref(openSideNav) ? "p-2" : "flex items-center p-2"], "text-white text-sm font-semibold text-center hover:bg-gray-900 rounded-lg cursor-pointer"]
      }, _attrs))}><div class="${ssrRenderClass([!unref(openSideNav) ? "w-full flex justify-center" : ""])}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icon)), null, null), _parent);
      _push(`</div><div class="${ssrRenderClass([!unref(openSideNav) ? "" : "mt-1 ml-4"])}">`);
      if (!unref(openSideNav)) {
        _push(`<span>${ssrInterpolate(unref(iconString).substring(0, 4))}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(unref(iconString))}</span>`);
      }
      _push(`</div></li>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SideNavItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  name: "MenuIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon menu-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Menu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MenuIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  name: "MagnifyIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon magnify-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Magnify.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MagnifyIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "NavLayout",
  __ssrInlineRender: true,
  setup(__props) {
    let openSideNav = ref(true);
    let openSideNavOverlay = ref(false);
    let sideNavOverlay = ref(null);
    let width = ref(document.documentElement.clientWidth);
    onMounted(() => {
      resize();
      sideNavOverlay.value.classList.value = sideNavOverlay.value.classList.value += " hidden";
      window.addEventListener("resize", () => {
        width.value = document.documentElement.clientWidth;
        resize();
      });
    });
    const resize = () => {
      if (width.value < 1280 && openSideNav.value) {
        openSideNav.value = false;
      }
      if (width.value > 1279 && !openSideNav.value) {
        openSideNav.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div id="TopNav" class="w-[100%] h-[60px] fixed bg-slate-700 z-20 flex items-center justify-between"><div class="flex items-center"><button class="p-2 ml-3 rounded-full hover:bg-gray-900 inline-block cursor-pointer">`);
      _push(ssrRenderComponent(MenuIcon, {
        fillColor: "#FFFFFF",
        size: 26
      }, null, _parent));
      _push(`</button><div class="mx-2"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex items-center justify-center mr-10 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="130" src="/images/logo.png" alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "130",
                src: "/images/logo.png",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-[600px] md:block hidden"><div class="rounded-full flex items-center bg-[#222222]"><input type="text" class="form-control block w-full px-5 py-1.5 text-base font-normal text-gray-200 bg-black placeholder-gray-400 bg-clip-padding border border-solid border-l-gray-700 border-y-gray-700 rounded-l-full transition ease-in-out m-0 border-transparent focus:ring-0" placeholder="Пошук...">`);
      _push(ssrRenderComponent(MagnifyIcon, {
        class: "mx-6",
        fillColor: "#FFFFFF",
        size: 23
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-slate-700 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <div${_scopeId}>`);
            if (_ctx.$page.props.auth.user.role != "admin") {
              _push2(`<img class="rounded-full ml-2" width="35" src="/images/astronaut.png"${_scopeId}>`);
            } else {
              _push2(`<img class="rounded-full ml-2 bg-slate-400" width="35" src="/images/admin.png"${_scopeId}>`);
            }
            _push2(`</div></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-slate-700 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  createVNode("div", null, [
                    _ctx.$page.props.auth.user.role != "admin" ? (openBlock(), createBlock("img", {
                      key: 0,
                      class: "rounded-full ml-2",
                      width: "35",
                      src: "/images/astronaut.png"
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      class: "rounded-full ml-2 bg-slate-400",
                      width: "35",
                      src: "/images/admin.png"
                    }))
                  ])
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Профіль `);
                } else {
                  return [
                    createTextVNode(" Профіль ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Вихід `);
                } else {
                  return [
                    createTextVNode(" Вихід ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Профіль ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$1, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Вихід ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(width) > 639) {
        _push(`<div>`);
        if (_ctx.$page.url === "/") {
          _push(`<div id="SideNav" class="${ssrRenderClass([[!unref(openSideNav) ? "w-[70px]" : "w-[240px]"], "h-[100%] fixed z-0 bg-slate-800"])}"><ul class="${ssrRenderClass([[!unref(openSideNav) ? "p-2" : "px-5 pb-2 pt-[7px]"], "mt-[60px] w-full"])}">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("home")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_sfc_main$5, {
                  openSideNav: unref(openSideNav),
                  iconString: "Головна"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_sfc_main$5, {
                    openSideNav: unref(openSideNav),
                    iconString: "Головна"
                  }, null, 8, ["openSideNav"])
                ];
              }
            }),
            _: 1
          }, _parent));
          if (_ctx.$page.props.auth.user.role == "admin") {
            _push(`<div><div class="border-b border-slate-700 my-2.5"></div>`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("addCourse")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_sfc_main$5, {
                    openSideNav: unref(openSideNav),
                    iconString: "Створити курс"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      openSideNav: unref(openSideNav),
                      iconString: "Створити курс"
                    }, null, 8, ["openSideNav"])
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("manageCourses")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_sfc_main$5, {
                    openSideNav: unref(openSideNav),
                    iconString: "Керування курсами"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      openSideNav: unref(openSideNav),
                      iconString: "Керування курсами"
                    }, null, 8, ["openSideNav"])
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("manageStudents")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_sfc_main$5, {
                    openSideNav: unref(openSideNav),
                    iconString: "Керування учнями"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      openSideNav: unref(openSideNav),
                      iconString: "Керування учнями"
                    }, null, 8, ["openSideNav"])
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="border-b border-slate-700 my-2.5"></div>`);
          _push(ssrRenderComponent(_sfc_main$5, {
            openSideNav: unref(openSideNav),
            iconString: "Курси"
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$5, {
            openSideNav: unref(openSideNav),
            iconString: "Моя бібліотека"
          }, null, _parent));
          _push(`</ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([
        unref(openSideNavOverlay) ? "animate__animated animate__fadeIn animate__faster" : "hidden z-[-1]",
        "bg-slate-700 bg-opacity-70 fixed z-50 w-full h-screen"
      ])}"></div><div id="SideNavOverlay" class="${ssrRenderClass([
        unref(openSideNavOverlay) ? "animate__animated animate__slideInLeft animate__faster" : "animate__animated animate__slideOutLeft animate__faster",
        "h-[100%] fixed z-50 bg-slate-700 mt-[9px] w-[240px]"
      ])}"><div class="flex items-center"><button class="p-2 ml-3 rounded-full hover:bg-gray-800 cursor-pointer">`);
      _push(ssrRenderComponent(MenuIcon, {
        fillColor: "#FFFFFF",
        size: 26
      }, null, _parent));
      _push(`</button><div class="mx-2"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex items-center justify-center cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="130" src="/images/logo.png" alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "130",
                src: "/images/logo.png",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="w-full px-5 py-2 p-2 mt-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              openSideNav: true,
              iconString: "Головна"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
                openSideNav: true,
                iconString: "Головна"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.auth.user.role == "admin") {
        _push(`<div><div class="border-b border-slate-600 my-2.5"></div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("addCourse")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                openSideNav: true,
                iconString: "Створити курс"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5, {
                  openSideNav: true,
                  iconString: "Створити курс"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("manageCourses")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                openSideNav: true,
                iconString: "Керування курсами"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5, {
                  openSideNav: true,
                  iconString: "Керування курсами"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("manageStudents")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                openSideNav: true,
                iconString: "Керування учнями"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5, {
                  openSideNav: true,
                  iconString: "Керування учнями"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border-b border-slate-600 my-2.5"></div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        openSideNav: true,
        iconString: "Курси"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        openSideNav: true,
        iconString: "Моя бібліотека"
      }, null, _parent));
      _push(`</ul></div><div class="${ssrRenderClass([{
        "w-[calc(100%-70px)]": !unref(openSideNav),
        "w-[calc(100%-240px)]": unref(openSideNav),
        "w-[100vw] xl:w-[calc(100%-80px)]": _ctx.$page.url !== "/",
        "w-[100vw]": unref(width) < 639
      }, "w-[100%] h-[calc(100vh-60px)] absolute right-0 top-[60px]"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/NavLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a,
  _sfc_main$1 as b
};
