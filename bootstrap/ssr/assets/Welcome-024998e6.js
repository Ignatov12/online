import { toRefs, ref, mergeProps, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./NavLayout-033b9d6c.js";
import { S as Star, a as StarHalfFull } from "./StarHalfFull-1d73e775.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {
  __name: "CourseCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    instructor: String,
    image: String,
    thumbnail: String,
    rating: String,
    overview: String,
    current_price: String,
    orig_price: String
  },
  setup(__props) {
    const props = __props;
    const {
      title,
      instructor,
      image,
      thumbnail,
      rating,
      current_price,
      orig_price
    } = toRefs(props);
    let show = ref(false);
    let width = ref(document.documentElement.clientWidth);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="${ssrRenderClass([[
        unref(show) && unref(width) > 639 ? "absolute z-30 transition ease-in-out delay-150 hover:translate-y-8 hover:scale-125 hover:bg-gray-600 duration-300" : ""
      ], "rounded-lg bg-gray-800 ms-2"])}"><div><img class="${ssrRenderClass([
        unref(show) ? "transition ease-in-out delay-150 rounded-lg" : "rounded-lg",
        "aspect-video cursor-pointer"
      ])}"${ssrRenderAttr("src", unref(thumbnail) || "")}><div class="w-full h-full aspect-video cursor-pointer delay-350 hidden"></div></div><div><div class="flex mt-1.5"><div><img class="rounded-full m-1.5 mt-2 flex items-baseline w-8 h-8"${ssrRenderAttr("src", unref(image) || "")}></div><div class="px-1.5 text-white mt-1"><div class="text-[17px] font-extrabold w-full cursor-pointer">${ssrInterpolate(unref(title).substring(0, 100))}</div><div class="text-[14px] text-gray-300 font-extrabold flex gap-1 items-center cursor-pointer">${ssrInterpolate(unref(instructor).substring(0, 30))} `);
      _push(ssrRenderComponent(Star, {
        fillColor: "#FFD700",
        size: 17
      }, null, _parent));
      _push(ssrRenderComponent(Star, {
        fillColor: "#FFD700",
        size: 17
      }, null, _parent));
      _push(ssrRenderComponent(Star, {
        fillColor: "#FFD700",
        size: 17
      }, null, _parent));
      _push(ssrRenderComponent(Star, {
        fillColor: "#FFD700",
        size: 17
      }, null, _parent));
      _push(ssrRenderComponent(StarHalfFull, {
        fillColor: "#FFD700",
        size: 17
      }, null, _parent));
      _push(`</div><div class="text-sm mb-1 mt-2 text-gray-200">`);
      if (unref(orig_price) > unref(current_price)) {
        _push(`<span class="text-gray-400 line-through">Вартість ${ssrInterpolate(unref(orig_price))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Вартість ${ssrInterpolate(unref(current_price))}</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CourseCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Welcome_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    courses: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Home" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 pr-1 pt-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.courses, (course, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("course.show", { id: course.id })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      title: course.title,
                      instructor: course.instructor,
                      overview: course.overview,
                      image: `https://picsum.photos/${course.id + 190}/300`,
                      thumbnail: course.thumbnail,
                      current_price: course.current_price,
                      orig_price: course.orig_price
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$1, {
                        title: course.title,
                        instructor: course.instructor,
                        overview: course.overview,
                        image: `https://picsum.photos/${course.id + 190}/300`,
                        thumbnail: course.thumbnail,
                        current_price: course.current_price,
                        orig_price: course.orig_price
                      }, null, 8, ["title", "instructor", "overview", "image", "thumbnail", "current_price", "orig_price"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 pr-1 pt-1" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course, index) => {
                  return openBlock(), createBlock("div", { key: course }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("course.show", { id: course.id })
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          title: course.title,
                          instructor: course.instructor,
                          overview: course.overview,
                          image: `https://picsum.photos/${course.id + 190}/300`,
                          thumbnail: course.thumbnail,
                          current_price: course.current_price,
                          orig_price: course.orig_price
                        }, null, 8, ["title", "instructor", "overview", "image", "thumbnail", "current_price", "orig_price"])
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
