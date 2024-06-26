import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./NavLayout-033b9d6c.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "ManageStudents",
  __ssrInlineRender: true,
  props: { students: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Students" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="container mx-auto py-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="md:col-span-3 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><img class="rounded-full" width="35" src="/images/astronaut.png"${_scopeId}><h2 class="text-white ml-2 font-extrabold py-1"${_scopeId}> Облікові записи студентів </h2></div><div class="md:col-span-3 bg-gray-800 rounded-lg p-6"${_scopeId}><div class="flex flex-wrap mx-3 mb-6"${_scopeId}><table class="min-w-full"${_scopeId}><thead class="border-b border-slate-600"${_scopeId}><tr class="text-white flex justify-around"${_scopeId}><th scope="col" class="text-sm font-medium px-2 py-4"${_scopeId}> ID Студента </th><th scope="col" class="text-sm font-medium px-2 py-4"${_scopeId}> Ім&#39;я студента </th><th scope="col" class="text-sm font-medium px-2 py-4"${_scopeId}> Електронна пошта студента </th><th scope="col" class="text-sm font-medium px-2 py-4"${_scopeId}> Тип авторизації </th><th scope="col" class="text-sm font-medium px-2 py-4"${_scopeId}> Перегляд облікового запису </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.students, (student) => {
              _push2(`<div${_scopeId}><tr class="border-b border-slate-600 hover:bg-gray-600 rounded-sm text-white text-sm font-medium"${_scopeId}><td class="py-4 w-3/12 text-center"${_scopeId}>${ssrInterpolate(student.id)}</td><td class="py-4 w-3/12"${_scopeId}>${ssrInterpolate(student.name)}</td><td class="py-4 w-3/12"${_scopeId}>${ssrInterpolate(student.email)}</td><td class="py-4 w-3/12"${_scopeId}>${ssrInterpolate(student.auth_type)}</td><td class="py-4 w-3/12"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("student.show", {
                  id: student.id
                })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button${ssrRenderAttr(
                      "data-modal-target",
                      "defaultModal" + student.id
                    )}${ssrRenderAttr(
                      "data-modal-toggle",
                      "defaultModal" + student.id
                    )} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-4 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 duration-300 dark:focus:ring-blue-800" type="button"${_scopeId2}> Переглянути </button>`);
                  } else {
                    return [
                      createVNode("button", {
                        "data-modal-target": "defaultModal" + student.id,
                        "data-modal-toggle": "defaultModal" + student.id,
                        class: "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-4 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 duration-300 dark:focus:ring-blue-800",
                        type: "button"
                      }, " Переглянути ", 8, ["data-modal-target", "data-modal-toggle"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr></div>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></main>`);
          } else {
            return [
              createVNode("main", { class: "container mx-auto py-8" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("img", {
                      class: "rounded-full",
                      width: "35",
                      src: "/images/astronaut.png"
                    }),
                    createVNode("h2", { class: "text-white ml-2 font-extrabold py-1" }, " Облікові записи студентів ")
                  ]),
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6" }, [
                    createVNode("div", { class: "flex flex-wrap mx-3 mb-6" }, [
                      createVNode("table", { class: "min-w-full" }, [
                        createVNode("thead", { class: "border-b border-slate-600" }, [
                          createVNode("tr", { class: "text-white flex justify-around" }, [
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-2 py-4"
                            }, " ID Студента "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-2 py-4"
                            }, " Ім'я студента "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-2 py-4"
                            }, " Електронна пошта студента "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-2 py-4"
                            }, " Тип авторизації "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-sm font-medium px-2 py-4"
                            }, " Перегляд облікового запису ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.students, (student) => {
                            return openBlock(), createBlock("div", { key: student }, [
                              createVNode("tr", { class: "border-b border-slate-600 hover:bg-gray-600 rounded-sm text-white text-sm font-medium" }, [
                                createVNode("td", { class: "py-4 w-3/12 text-center" }, toDisplayString(student.id), 1),
                                createVNode("td", { class: "py-4 w-3/12" }, toDisplayString(student.name), 1),
                                createVNode("td", { class: "py-4 w-3/12" }, toDisplayString(student.email), 1),
                                createVNode("td", { class: "py-4 w-3/12" }, toDisplayString(student.auth_type), 1),
                                createVNode("td", { class: "py-4 w-3/12" }, [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("student.show", {
                                      id: student.id
                                    })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("button", {
                                        "data-modal-target": "defaultModal" + student.id,
                                        "data-modal-toggle": "defaultModal" + student.id,
                                        class: "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-4 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 duration-300 dark:focus:ring-blue-800",
                                        type: "button"
                                      }, " Переглянути ", 8, ["data-modal-target", "data-modal-toggle"])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ])
                              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ManageStudents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
