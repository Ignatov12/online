import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./NavLayout-033b9d6c.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "Student",
  __ssrInlineRender: true,
  props: { student: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Student Details" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="container mx-auto py-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-4 gap-8"${_scopeId}><div class="md:col-span-4 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><img class="rounded-full" width="35" src="/images/astronaut.png"${_scopeId}><h2 class="text-white ml-2 font-extrabold py-1"${_scopeId}> Відомості про студента: ${ssrInterpolate(__props.student.name)}</h2></div><div class="md:col-span-2 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><div class="mr-4"${_scopeId}><p class="text-white font-semibold"${_scopeId}>Ім&#39;я:</p><p class="text-white"${_scopeId}>${ssrInterpolate(__props.student.name)}</p><p class="text-white font-semibold mt-3"${_scopeId}>Електронна адреса:</p><p class="text-white"${_scopeId}>${ssrInterpolate(__props.student.email)}</p><p class="text-white font-semibold mt-3"${_scopeId}> Обліковий запис створено: </p><p class="text-white"${_scopeId}>${ssrInterpolate(__props.student.created_at)}</p></div></div><div class="md:col-span-2 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><div class="mr-4"${_scopeId}><p class="text-white font-semibold"${_scopeId}>Акаунт ID:</p><p class="text-white"${_scopeId}>${ssrInterpolate(__props.student.id)}</p><p class="text-white font-semibold mt-3"${_scopeId}>Роль:</p><p class="text-white"${_scopeId}>${ssrInterpolate(__props.student.role)}</p><p class="text-white font-semibold mt-3"${_scopeId}>Тип авторизації:</p><p class="text-white"${_scopeId}>${ssrInterpolate(__props.student.auth_type)}</p></div></div><div class="md:col-span-4 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><h4 class="text-white ml-2 font-extrabold py-1"${_scopeId}> Зараховано на курси </h4></div></div></main>`);
          } else {
            return [
              createVNode("main", { class: "container mx-auto py-8" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-8" }, [
                  createVNode("div", { class: "md:col-span-4 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("img", {
                      class: "rounded-full",
                      width: "35",
                      src: "/images/astronaut.png"
                    }),
                    createVNode("h2", { class: "text-white ml-2 font-extrabold py-1" }, " Відомості про студента: " + toDisplayString(__props.student.name), 1)
                  ]),
                  createVNode("div", { class: "md:col-span-2 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("div", { class: "mr-4" }, [
                      createVNode("p", { class: "text-white font-semibold" }, "Ім'я:"),
                      createVNode("p", { class: "text-white" }, toDisplayString(__props.student.name), 1),
                      createVNode("p", { class: "text-white font-semibold mt-3" }, "Електронна адреса:"),
                      createVNode("p", { class: "text-white" }, toDisplayString(__props.student.email), 1),
                      createVNode("p", { class: "text-white font-semibold mt-3" }, " Обліковий запис створено: "),
                      createVNode("p", { class: "text-white" }, toDisplayString(__props.student.created_at), 1)
                    ])
                  ]),
                  createVNode("div", { class: "md:col-span-2 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("div", { class: "mr-4" }, [
                      createVNode("p", { class: "text-white font-semibold" }, "Акаунт ID:"),
                      createVNode("p", { class: "text-white" }, toDisplayString(__props.student.id), 1),
                      createVNode("p", { class: "text-white font-semibold mt-3" }, "Роль:"),
                      createVNode("p", { class: "text-white" }, toDisplayString(__props.student.role), 1),
                      createVNode("p", { class: "text-white font-semibold mt-3" }, "Тип авторизації:"),
                      createVNode("p", { class: "text-white" }, toDisplayString(__props.student.auth_type), 1)
                    ])
                  ]),
                  createVNode("div", { class: "md:col-span-4 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("h4", { class: "text-white ml-2 font-extrabold py-1" }, " Зараховано на курси ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Student.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
