import { unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./NavLayout-033b9d6c.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "ManageCourse",
  __ssrInlineRender: true,
  props: { courses: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Керування курсами" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="container mx-auto py-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="md:col-span-3 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><h2 class="text-white font-extrabold"${_scopeId}>Керування курсами</h2></div><div class="md:col-span-3 bg-gray-800 rounded-lg p-6"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><table class="min-w-full"${_scopeId}><thead class="border-b"${_scopeId}><tr class="text-white flex justify-around"${_scopeId}><th scope="col" class="text-sm font-medium px-6 py-4"${_scopeId}> Курс </th><th scope="col" class="text-sm font-medium px-6 py-4"${_scopeId}> Назва курсу </th><th scope="col" class="text-sm font-medium px-6 py-4"${_scopeId}> Викладач курсу </th><th scope="col" class="text-sm font-medium px-6 py-4"${_scopeId}> Варіант </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.courses, (course) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("course.show", {
                  id: course.id
                })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<tr class="border-b flex items-center justify-center hover:bg-gray-600 rounded-sm"${_scopeId2}><td class="px-6 py-4 w-4/12 text-sm font-medium text-white"${_scopeId2}><img class="transition ease-in-out delay-150 rounded-lg"${ssrRenderAttr(
                      "src",
                      course.thumbnail || ""
                    )}${_scopeId2}></td><td class="px-6 py-4 w-7/12 text-sm font-medium text-white"${_scopeId2}>${ssrInterpolate(course.title)}</td><td class="px-6 py-4 w-7/12 text-sm font-medium text-white"${_scopeId2}>${ssrInterpolate(course.instructor)}</td><td class="px-6 py-4 w-5/12 text-sm font-medium text-white relative text-center"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route(
                        "course.destroy",
                        {
                          id: course.id
                        }
                      ),
                      as: "button",
                      method: "delete",
                      class: "text-white py-3 text-sm bg-red-600 hover:bg-red-800 duration-300 font-bold px-3 rounded cursor-pointer"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Видалити `);
                        } else {
                          return [
                            createTextVNode(" Видалити ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></td></tr>`);
                  } else {
                    return [
                      createVNode("tr", { class: "border-b flex items-center justify-center hover:bg-gray-600 rounded-sm" }, [
                        createVNode("td", { class: "px-6 py-4 w-4/12 text-sm font-medium text-white" }, [
                          createVNode("img", {
                            class: "transition ease-in-out delay-150 rounded-lg",
                            src: course.thumbnail || ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("td", { class: "px-6 py-4 w-7/12 text-sm font-medium text-white" }, toDisplayString(course.title), 1),
                        createVNode("td", { class: "px-6 py-4 w-7/12 text-sm font-medium text-white" }, toDisplayString(course.instructor), 1),
                        createVNode("td", { class: "px-6 py-4 w-5/12 text-sm font-medium text-white relative text-center" }, [
                          createVNode("div", { class: "w-full" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route(
                                "course.destroy",
                                {
                                  id: course.id
                                }
                              ),
                              as: "button",
                              method: "delete",
                              class: "text-white py-3 text-sm bg-red-600 hover:bg-red-800 duration-300 font-bold px-3 rounded cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Видалити ")
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></main>`);
          } else {
            return [
              createVNode("main", { class: "container mx-auto py-8" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("h2", { class: "text-white font-extrabold" }, "Керування курсами")
                  ]),
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6" }, [
                    createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                      createVNode("table", { class: "min-w-full" }, [
                        createVNode("thead", { class: "border-b" }, [
                          createVNode("tr", { class: "text-white flex justify-around" }, [
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-6 py-4"
                            }, " Курс "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-6 py-4"
                            }, " Назва курсу "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-6 py-4"
                            }, " Викладач курсу "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-6 py-4"
                            }, " Варіант ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                            return openBlock(), createBlock("div", { key: course }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("course.show", {
                                  id: course.id
                                })
                              }, {
                                default: withCtx(() => [
                                  createVNode("tr", { class: "border-b flex items-center justify-center hover:bg-gray-600 rounded-sm" }, [
                                    createVNode("td", { class: "px-6 py-4 w-4/12 text-sm font-medium text-white" }, [
                                      createVNode("img", {
                                        class: "transition ease-in-out delay-150 rounded-lg",
                                        src: course.thumbnail || ""
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("td", { class: "px-6 py-4 w-7/12 text-sm font-medium text-white" }, toDisplayString(course.title), 1),
                                    createVNode("td", { class: "px-6 py-4 w-7/12 text-sm font-medium text-white" }, toDisplayString(course.instructor), 1),
                                    createVNode("td", { class: "px-6 py-4 w-5/12 text-sm font-medium text-white relative text-center" }, [
                                      createVNode("div", { class: "w-full" }, [
                                        createVNode(unref(Link), {
                                          href: _ctx.route(
                                            "course.destroy",
                                            {
                                              id: course.id
                                            }
                                          ),
                                          as: "button",
                                          method: "delete",
                                          class: "text-white py-3 text-sm bg-red-600 hover:bg-red-800 duration-300 font-bold px-3 rounded cursor-pointer"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Видалити ")
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ManageCourse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
