import { mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./NavLayout-033b9d6c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {
  name: "PlayIcon",
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
    class: "material-design-icon play-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Play.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Play = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "WatchEpisode",
  __ssrInlineRender: true,
  props: {
    episode_details: Object,
    other_episodes: Array
  },
  setup(__props) {
    const page = usePage();
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
      _push(ssrRenderComponent(unref(Head), { title: "Watch" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="container mx-auto py-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="md:col-span-3 bg-gray-800 rounded-lg p-6 flex justify-center items-center"${_scopeId}><video${ssrRenderAttr("src", __props.episode_details.episode_video)} class="w-[1000px]" controls autoplay${_scopeId}></video></div><div class="md:col-span-3 bg-gray-800 rounded-lg p-6 flex flex-col text-white"${_scopeId}><h2 class="text-xl font-semibold mb-2"${_scopeId}>${ssrInterpolate(__props.episode_details.episode_title)}</h2><div class="flex items-center mb-2"${_scopeId}><img class="rounded-full w-8 h-8 mr-1.5"${ssrRenderAttr("src", `https://picsum.photos/${__props.episode_details.course_id + 190}/300`)}${_scopeId}><div class="text-[14px] text-gray-300 font-extrabold"${_scopeId}>${ssrInterpolate(__props.episode_details.instructor)}</div></div><p class="text-gray-400 mt-2 flex items-center justify-center text-justify"${_scopeId}>${ssrInterpolate(__props.episode_details.episode_description)}</p></div><div class="md:col-span-3 bg-gray-800 rounded-lg p-6 flex flex-col text-white"${_scopeId}><h2 class="text-xl font-semibold mb-4 text-white"${_scopeId}> Всі епізоди </h2><ul class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.other_episodes, (other, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("course.watchepisode", {
                  id: other.id
                }),
                class: "flex items-center justify-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="${ssrRenderClass([
                      unref(page).url == "/watch/" + other.id ? "bg-gray-600  hover:bg-gray-600" : "hover:bg-gray-900",
                      "w-full flex items-center space-x-4 rounded-lg"
                    ])}"${_scopeId2}><div class="flex-shrink-0"${_scopeId2}><img class="h-40 w-60 rounded-md"${ssrRenderAttr("src", other.episode_thumbnail)} alt="Video Thumbnail"${_scopeId2}></div><div class="flex-grow"${_scopeId2}><h3 class="text-lg font-semibold text-white"${_scopeId2}>${ssrInterpolate(other.episode_title)}</h3><p class="text-gray-400"${_scopeId2}>${ssrInterpolate(trimLongText(
                      other.episode_description,
                      150
                    ))}</p>`);
                    if (unref(page).url == "/watch/" + other.id) {
                      _push3(`<div class="text-white flex mt-3 items-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(Play, {
                        fillColor: "#FFFFFF",
                        size: 25
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="font-extrabold"${_scopeId2}>Зараз грає</span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></li>`);
                  } else {
                    return [
                      createVNode("li", {
                        class: [
                          "w-full flex items-center space-x-4 rounded-lg",
                          unref(page).url == "/watch/" + other.id ? "bg-gray-600  hover:bg-gray-600" : "hover:bg-gray-900"
                        ]
                      }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode("img", {
                            class: "h-40 w-60 rounded-md",
                            src: other.episode_thumbnail,
                            alt: "Video Thumbnail"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "flex-grow" }, [
                          createVNode("h3", { class: "text-lg font-semibold text-white" }, toDisplayString(other.episode_title), 1),
                          createVNode("p", { class: "text-gray-400" }, toDisplayString(trimLongText(
                            other.episode_description,
                            150
                          )), 1),
                          unref(page).url == "/watch/" + other.id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-white flex mt-3 items-center"
                          }, [
                            createVNode(Play, {
                              fillColor: "#FFFFFF",
                              size: 25
                            }),
                            createVNode("span", { class: "font-extrabold" }, "Зараз грає")
                          ])) : createCommentVNode("", true)
                        ])
                      ], 2)
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
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6 flex justify-center items-center" }, [
                    createVNode("video", {
                      src: __props.episode_details.episode_video,
                      class: "w-[1000px]",
                      controls: "",
                      autoplay: ""
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6 flex flex-col text-white" }, [
                    createVNode("h2", { class: "text-xl font-semibold mb-2" }, toDisplayString(__props.episode_details.episode_title), 1),
                    createVNode("div", { class: "flex items-center mb-2" }, [
                      createVNode("img", {
                        class: "rounded-full w-8 h-8 mr-1.5",
                        src: `https://picsum.photos/${__props.episode_details.course_id + 190}/300`
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-[14px] text-gray-300 font-extrabold" }, toDisplayString(__props.episode_details.instructor), 1)
                    ]),
                    createVNode("p", { class: "text-gray-400 mt-2 flex items-center justify-center text-justify" }, toDisplayString(__props.episode_details.episode_description), 1)
                  ]),
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6 flex flex-col text-white" }, [
                    createVNode("h2", { class: "text-xl font-semibold mb-4 text-white" }, " Всі епізоди "),
                    createVNode("ul", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.other_episodes, (other, index) => {
                        return openBlock(), createBlock("div", { key: other }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("course.watchepisode", {
                              id: other.id
                            }),
                            class: "flex items-center justify-center cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode("li", {
                                class: [
                                  "w-full flex items-center space-x-4 rounded-lg",
                                  unref(page).url == "/watch/" + other.id ? "bg-gray-600  hover:bg-gray-600" : "hover:bg-gray-900"
                                ]
                              }, [
                                createVNode("div", { class: "flex-shrink-0" }, [
                                  createVNode("img", {
                                    class: "h-40 w-60 rounded-md",
                                    src: other.episode_thumbnail,
                                    alt: "Video Thumbnail"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "flex-grow" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-white" }, toDisplayString(other.episode_title), 1),
                                  createVNode("p", { class: "text-gray-400" }, toDisplayString(trimLongText(
                                    other.episode_description,
                                    150
                                  )), 1),
                                  unref(page).url == "/watch/" + other.id ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-white flex mt-3 items-center"
                                  }, [
                                    createVNode(Play, {
                                      fillColor: "#FFFFFF",
                                      size: 25
                                    }),
                                    createVNode("span", { class: "font-extrabold" }, "Зараз грає")
                                  ])) : createCommentVNode("", true)
                                ])
                              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WatchEpisode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
