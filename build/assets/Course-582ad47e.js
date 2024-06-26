import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./NavLayout-033b9d6c.js";
import { S as Star, a as StarHalfFull } from "./StarHalfFull-1d73e775.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "Course",
  __ssrInlineRender: true,
  props: {
    course: Object,
    episodes: Array
  },
  setup(__props) {
    const trimLongText = (string, length) => {
      if (string.length <= length) {
        return string;
      } else {
        const trimmedString = string.slice(0, length).trim();
        const trimmedStringWithEllipsis = trimmedString + "...";
        return trimmedStringWithEllipsis;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.course.title
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="container mx-auto py-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="md:col-span-2 bg-gray-800 rounded-lg p-6"${_scopeId}><h2 class="text-xl font-semibold mb-4 text-white"${_scopeId}> Перегляд курсу </h2><p class="text-white mb-4 flex items-center justify-center text-justify"${_scopeId}>${ssrInterpolate(__props.course.overview)}</p></div><div class="bg-gray-800 rounded-lg p-6"${_scopeId}><img${ssrRenderAttr("src", __props.course.thumbnail)} alt="Course Image" class="mb-4 rounded-lg"${_scopeId}><h2 class="text-xl font-semibold mb-4 text-white"${_scopeId}>${ssrInterpolate(__props.course.title)}</h2><div${_scopeId}><img class="rounded-full m-1.5 mt-2 flex items-baseline w-8 h-8"${ssrRenderAttr("src", `https://picsum.photos/${__props.course.id + 190}/300`)}${_scopeId}></div><div class="px-1.5 text-white mt-1"${_scopeId}><div class="text-[14px] text-gray-300 font-extrabold flex gap-1 items-center cursor-pointer"${_scopeId}>${ssrInterpolate(__props.course.instructor)}</div><div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(Star, {
              fillColor: "#FFD700",
              size: 17
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Star, {
              fillColor: "#FFD700",
              size: 17
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Star, {
              fillColor: "#FFD700",
              size: 17
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Star, {
              fillColor: "#FFD700",
              size: 17
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(StarHalfFull, {
              fillColor: "#FFD700",
              size: 17
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-lg mb-1 mt-3 text-gray-300"${_scopeId}>`);
            if (__props.course.orig_price > __props.course.current_price) {
              _push2(`<span class="text-gray-400 line-through"${_scopeId}>Вартість ${ssrInterpolate(__props.course.orig_price)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` Вартість ${ssrInterpolate(__props.course.current_price)}</div></div><button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 duration-300"${_scopeId}> Зареєструватися зараз </button></div><div class="md:col-span-3 bg-gray-800 rounded-lg p-6"${_scopeId}><h2 class="text-xl font-semibold mb-4 text-white"${_scopeId}> Список епізодів </h2><ul class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.episodes, (episode) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("course.watchepisode", {
                  id: episode.id
                }),
                class: "flex items-center justify-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="w-full flex items-center space-x-4 hover:bg-gray-900 rounded-lg"${_scopeId2}><div class="flex-shrink-0"${_scopeId2}><img class="h-40 w-60 rounded-md"${ssrRenderAttr("src", episode.episode_thumbnail)} alt="Video Thumbnail"${_scopeId2}></div><div class="flex-grow"${_scopeId2}><h3 class="text-lg font-semibold text-white"${_scopeId2}>${ssrInterpolate(episode.episode_title)}</h3><p class="text-gray-400"${_scopeId2}>${ssrInterpolate(trimLongText(
                      episode.episode_description,
                      150
                    ))}</p></div></li>`);
                  } else {
                    return [
                      createVNode("li", { class: "w-full flex items-center space-x-4 hover:bg-gray-900 rounded-lg" }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode("img", {
                            class: "h-40 w-60 rounded-md",
                            src: episode.episode_thumbnail,
                            alt: "Video Thumbnail"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "flex-grow" }, [
                          createVNode("h3", { class: "text-lg font-semibold text-white" }, toDisplayString(episode.episode_title), 1),
                          createVNode("p", { class: "text-gray-400" }, toDisplayString(trimLongText(
                            episode.episode_description,
                            150
                          )), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></ul></div></div></main>`);
          } else {
            return [
              createVNode("main", { class: "container mx-auto py-8" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "md:col-span-2 bg-gray-800 rounded-lg p-6" }, [
                    createVNode("h2", { class: "text-xl font-semibold mb-4 text-white" }, " Перегляд курсу "),
                    createVNode("p", { class: "text-white mb-4 flex items-center justify-center text-justify" }, toDisplayString(__props.course.overview), 1)
                  ]),
                  createVNode("div", { class: "bg-gray-800 rounded-lg p-6" }, [
                    createVNode("img", {
                      src: __props.course.thumbnail,
                      alt: "Course Image",
                      class: "mb-4 rounded-lg"
                    }, null, 8, ["src"]),
                    createVNode("h2", { class: "text-xl font-semibold mb-4 text-white" }, toDisplayString(__props.course.title), 1),
                    createVNode("div", null, [
                      createVNode("img", {
                        class: "rounded-full m-1.5 mt-2 flex items-baseline w-8 h-8",
                        src: `https://picsum.photos/${__props.course.id + 190}/300`
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "px-1.5 text-white mt-1" }, [
                      createVNode("div", { class: "text-[14px] text-gray-300 font-extrabold flex gap-1 items-center cursor-pointer" }, toDisplayString(__props.course.instructor), 1),
                      createVNode("div", { class: "flex" }, [
                        createVNode(Star, {
                          fillColor: "#FFD700",
                          size: 17
                        }),
                        createVNode(Star, {
                          fillColor: "#FFD700",
                          size: 17
                        }),
                        createVNode(Star, {
                          fillColor: "#FFD700",
                          size: 17
                        }),
                        createVNode(Star, {
                          fillColor: "#FFD700",
                          size: 17
                        }),
                        createVNode(StarHalfFull, {
                          fillColor: "#FFD700",
                          size: 17
                        })
                      ]),
                      createVNode("div", { class: "text-lg mb-1 mt-3 text-gray-300" }, [
                        __props.course.orig_price > __props.course.current_price ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-gray-400 line-through"
                        }, "Вартість " + toDisplayString(__props.course.orig_price), 1)) : createCommentVNode("", true),
                        createTextVNode(" Вартість " + toDisplayString(__props.course.current_price), 1)
                      ])
                    ]),
                    createVNode("button", { class: "mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 duration-300" }, " Зареєструватися зараз ")
                  ]),
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6" }, [
                    createVNode("h2", { class: "text-xl font-semibold mb-4 text-white" }, " Список епізодів "),
                    createVNode("ul", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.episodes, (episode) => {
                        return openBlock(), createBlock("div", { key: episode }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("course.watchepisode", {
                              id: episode.id
                            }),
                            class: "flex items-center justify-center cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode("li", { class: "w-full flex items-center space-x-4 hover:bg-gray-900 rounded-lg" }, [
                                createVNode("div", { class: "flex-shrink-0" }, [
                                  createVNode("img", {
                                    class: "h-40 w-60 rounded-md",
                                    src: episode.episode_thumbnail,
                                    alt: "Video Thumbnail"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "flex-grow" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-white" }, toDisplayString(episode.episode_title), 1),
                                  createVNode("p", { class: "text-gray-400" }, toDisplayString(trimLongText(
                                    episode.episode_description,
                                    150
                                  )), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
