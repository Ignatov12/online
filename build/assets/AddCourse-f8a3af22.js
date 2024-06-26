import { ref, unref, withCtx, createVNode, withModifiers, createTextVNode, withDirectives, isRef, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Head, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./NavLayout-033b9d6c.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "AddCourse",
  __ssrInlineRender: true,
  props: { errors: Object },
  setup(__props) {
    let course_title = ref("");
    let course_thumbnail = ref("");
    let course_instructor = ref("");
    let course_price = ref("");
    let course_overview = ref("");
    let error = ref({
      course_title: null,
      course_thumbnail: null,
      course_instructor: null,
      course_price: null,
      course_overview: null
    });
    const episodes = ref([
      {
        thumbnail: null,
        video: null,
        title: "",
        description: ""
      }
    ]);
    const addCourse = () => {
      let err = false;
      error.value.course_title = null;
      error.value.course_thumbnail = null;
      error.value.course_instructor = null;
      error.value.course_price = null;
      error.value.course_overview = null;
      if (!course_title.value) {
        error.value.course_title = "Please enter Course Title";
        err = true;
      }
      if (!course_thumbnail.value) {
        error.value.course_thumbnail = "Please select a thumbnail";
        err = true;
      }
      if (!course_instructor.value) {
        error.value.course_instructor = "Please enter Course Instructor";
        err = true;
      }
      if (!course_price.value) {
        error.value.course_price = "Please enter Course Price";
        err = true;
      }
      if (!course_overview.value) {
        error.value.course_overview = "Please enter Course Overview";
        err = true;
      }
      if (err) {
        return;
      }
      let data = new FormData();
      data.append("title", course_title.value);
      data.append("instructor", course_instructor.value);
      data.append("thumbnail", course_thumbnail.value);
      data.append("current_price", course_price.value);
      data.append("course_overview", course_overview.value);
      episodes.value = episodes.value.map((episode, index) => {
        data.append(`episodes[${index}][thumbnail]`, episode.thumbnail);
        data.append(`episodes[${index}][video]`, episode.video);
        data.append(`episodes[${index}][title]`, episode.title);
        data.append(`episodes[${index}][description]`, episode.description);
        return episode;
      });
      router.post("/addcourse", data);
    };
    const handleThumbnailChange = (index, e) => {
      const file = e.target.files[0];
      episodes.value[index].thumbnail = file;
    };
    const handleVideoChange = (index, e) => {
      const file = e.target.files[0];
      episodes.value[index].video = file;
    };
    const getImage = (e) => course_thumbnail.value = e.target.files[0];
    const addEpisode = () => {
      episodes.value.push({
        thumbnail: null,
        video: null,
        title: "",
        description: ""
      });
    };
    const removeEpisode = (index) => {
      episodes.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Add Course" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="container mx-auto py-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="md:col-span-3 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><h2 class="text-white font-extrabold"${_scopeId}>Додати новий курс</h2></div><div class="md:col-span-3 bg-gray-800 rounded-lg p-6 flex"${_scopeId}><form class="w-full"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"${_scopeId}><label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name"${_scopeId}> Назва курса <span class="text-red-600"${_scopeId}>*</span></label><input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Назва курсу"${ssrRenderAttr("value", unref(course_title))}${_scopeId}>`);
            if (unref(error).course_title) {
              _push2(`<p class="text-red-500 text-xs italic"${_scopeId}>${ssrInterpolate(unref(error).course_title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"${_scopeId}><label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name"${_scopeId}> Інструктор курсу <span class="text-red-600"${_scopeId}>*</span></label><input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Назва курсу"${ssrRenderAttr("value", unref(course_instructor))}${_scopeId}>`);
            if (unref(error).course_instructor) {
              _push2(`<p class="text-red-500 text-xs italic"${_scopeId}>${ssrInterpolate(unref(error).course_instructor)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full px-3"${_scopeId}><label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password"${_scopeId}> Огляд курсу <span class="text-red-600"${_scopeId}>*</span></label><textarea type="text" class="form-control block w-full px-5 py-1.5 text-xl font-normal text-gray-700 bg-gray-200 placeholder-gray-700 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 border-transparent focus:ring-0"${_scopeId}>${ssrInterpolate(unref(course_overview))}</textarea>`);
            if (unref(error).course_overview) {
              _push2(`<p class="text-red-500 text-xs italic"${_scopeId}>${ssrInterpolate(unref(error).course_overview)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"${_scopeId}><label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name"${_scopeId}> Ціна курсу <span class="text-red-600"${_scopeId}>*</span></label><input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" min="0.1" step="0.1" placeholder="Вартість курсу"${ssrRenderAttr("value", unref(course_price))}${_scopeId}>`);
            if (unref(error).course_price) {
              _push2(`<p class="text-red-500 text-xs italic"${_scopeId}>${ssrInterpolate(unref(error).course_price)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"${_scopeId}><label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name"${_scopeId}> Зображення курсу <span class="text-red-600"${_scopeId}>*</span></label><input class="form-control block w-full px-3 py-1.5 border text-white border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none" type="file" id="formFile"${_scopeId}>`);
            if (unref(error).course_thumbnail) {
              _push2(`<p class="text-red-500 text-xs italic"${_scopeId}>${ssrInterpolate(unref(error).course_thumbnail)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"${_scopeId}><button type="button" class="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"${_scopeId}> Додати епізод </button></div><div class="w-full px-3 rounded-sm mt-3"${_scopeId}><table class="table-auto border bg-white w-full"${_scopeId}>`);
            if (episodes.value.length > 0) {
              _push2(`<thead${_scopeId}><tr${_scopeId}><th class="border px-2 py-2"${_scopeId}>#</th><th class="border px-4 py-2 w-40"${_scopeId}> Назва </th><th class="border px-4 py-2 w-60"${_scopeId}> Опис </th><th class="border px-4 py-2"${_scopeId}> Зображення </th><th class="border px-4 py-2"${_scopeId}> Відео </th><th class="border px-2 py-2"${_scopeId}> Дії </th></tr></thead>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<tbody${_scopeId}><!--[-->`);
            ssrRenderList(episodes.value, (episode, index) => {
              _push2(`<tr${_scopeId}><td class="border-b pb-[20px] flex items-center justify-center"${_scopeId}> # ${ssrInterpolate(index + 1)}</td><td class="border px-4 py-2 w-40"${_scopeId}><input type="text"${ssrRenderAttr("value", episode.title)} placeholder="Назва епізода" class="w-full"${_scopeId}></td><td class="border px-4 py-2 w-60"${_scopeId}><input type="text"${ssrRenderAttr(
                "value",
                episode.description
              )} placeholder="Опис епізоду" class="w-full"${_scopeId}></td><td class="border px-4 py-2"${_scopeId}><input type="file" accept="image/*"${_scopeId}></td><td class="border px-4 py-2"${_scopeId}><input type="file" accept="video/*"${_scopeId}></td><td class="border px-2 py-2 flex items-center justify-center"${_scopeId}><button type="button"${ssrIncludeBooleanAttr(index == 0) ? " disabled" : ""} class="bg-red-600 text-white p-3 rounded-sm"${_scopeId}> Видалити </button></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div><div class="float-right"${_scopeId}><button type="submit" class="text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded cursor-pointer"${_scopeId}> Додати курс </button></div></form></div></div></main>`);
          } else {
            return [
              createVNode("main", { class: "container mx-auto py-8" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("h2", { class: "text-white font-extrabold" }, "Додати новий курс")
                  ]),
                  createVNode("div", { class: "md:col-span-3 bg-gray-800 rounded-lg p-6 flex" }, [
                    createVNode("form", {
                      class: "w-full",
                      onSubmit: withModifiers(addCourse, ["prevent"])
                    }, [
                      createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                        createVNode("div", { class: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
                          createVNode("label", {
                            class: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                            for: "grid-first-name"
                          }, [
                            createTextVNode(" Назва курса "),
                            createVNode("span", { class: "text-red-600" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            class: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                            id: "grid-first-name",
                            type: "text",
                            placeholder: "Назва курсу",
                            "onUpdate:modelValue": ($event) => isRef(course_title) ? course_title.value = $event : course_title = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(course_title)]
                          ]),
                          unref(error).course_title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-xs italic"
                          }, toDisplayString(unref(error).course_title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
                          createVNode("label", {
                            class: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                            for: "grid-first-name"
                          }, [
                            createTextVNode(" Інструктор курсу "),
                            createVNode("span", { class: "text-red-600" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            class: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                            id: "grid-first-name",
                            type: "text",
                            placeholder: "Назва курсу",
                            "onUpdate:modelValue": ($event) => isRef(course_instructor) ? course_instructor.value = $event : course_instructor = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(course_instructor)]
                          ]),
                          unref(error).course_instructor ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-xs italic"
                          }, toDisplayString(unref(error).course_instructor), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                        createVNode("div", { class: "w-full px-3" }, [
                          createVNode("label", {
                            class: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                            for: "grid-password"
                          }, [
                            createTextVNode(" Огляд курсу "),
                            createVNode("span", { class: "text-red-600" }, "*")
                          ]),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => isRef(course_overview) ? course_overview.value = $event : course_overview = $event,
                            type: "text",
                            class: "form-control block w-full px-5 py-1.5 text-xl font-normal text-gray-700 bg-gray-200 placeholder-gray-700 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 border-transparent focus:ring-0"
                          }, "\n                                ", 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(course_overview)]
                          ]),
                          unref(error).course_overview ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-xs italic"
                          }, toDisplayString(unref(error).course_overview), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                        createVNode("div", { class: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
                          createVNode("label", {
                            class: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                            for: "grid-first-name"
                          }, [
                            createTextVNode(" Ціна курсу "),
                            createVNode("span", { class: "text-red-600" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            class: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                            id: "grid-first-name",
                            type: "number",
                            min: "0.1",
                            step: "0.1",
                            placeholder: "Вартість курсу",
                            "onUpdate:modelValue": ($event) => isRef(course_price) ? course_price.value = $event : course_price = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(course_price)]
                          ]),
                          unref(error).course_price ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-xs italic"
                          }, toDisplayString(unref(error).course_price), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
                          createVNode("label", {
                            class: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                            for: "grid-first-name"
                          }, [
                            createTextVNode(" Зображення курсу "),
                            createVNode("span", { class: "text-red-600" }, "*")
                          ]),
                          createVNode("input", {
                            onChange: getImage,
                            class: "form-control block w-full px-3 py-1.5 border text-white border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none",
                            type: "file",
                            id: "formFile"
                          }, null, 32),
                          unref(error).course_thumbnail ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-xs italic"
                          }, toDisplayString(unref(error).course_thumbnail), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("hr", { class: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" }),
                      createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                        createVNode("div", { class: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
                          createVNode("button", {
                            onClick: addEpisode,
                            type: "button",
                            class: "text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
                          }, " Додати епізод ")
                        ]),
                        createVNode("div", { class: "w-full px-3 rounded-sm mt-3" }, [
                          createVNode("table", { class: "table-auto border bg-white w-full" }, [
                            episodes.value.length > 0 ? (openBlock(), createBlock("thead", { key: 0 }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "border px-2 py-2" }, "#"),
                                createVNode("th", { class: "border px-4 py-2 w-40" }, " Назва "),
                                createVNode("th", { class: "border px-4 py-2 w-60" }, " Опис "),
                                createVNode("th", { class: "border px-4 py-2" }, " Зображення "),
                                createVNode("th", { class: "border px-4 py-2" }, " Відео "),
                                createVNode("th", { class: "border px-2 py-2" }, " Дії ")
                              ])
                            ])) : createCommentVNode("", true),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(episodes.value, (episode, index) => {
                                return openBlock(), createBlock("tr", { key: index }, [
                                  createVNode("td", { class: "border-b pb-[20px] flex items-center justify-center" }, " # " + toDisplayString(index + 1), 1),
                                  createVNode("td", { class: "border px-4 py-2 w-40" }, [
                                    withDirectives(createVNode("input", {
                                      type: "text",
                                      "onUpdate:modelValue": ($event) => episode.title = $event,
                                      placeholder: "Назва епізода",
                                      class: "w-full"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, episode.title]
                                    ])
                                  ]),
                                  createVNode("td", { class: "border px-4 py-2 w-60" }, [
                                    withDirectives(createVNode("input", {
                                      type: "text",
                                      "onUpdate:modelValue": ($event) => episode.description = $event,
                                      placeholder: "Опис епізоду",
                                      class: "w-full"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [
                                        vModelText,
                                        episode.description
                                      ]
                                    ])
                                  ]),
                                  createVNode("td", { class: "border px-4 py-2" }, [
                                    createVNode("input", {
                                      type: "file",
                                      onChange: ($event) => handleThumbnailChange(
                                        index,
                                        $event
                                      ),
                                      accept: "image/*"
                                    }, null, 40, ["onChange"])
                                  ]),
                                  createVNode("td", { class: "border px-4 py-2" }, [
                                    createVNode("input", {
                                      type: "file",
                                      onChange: ($event) => handleVideoChange(
                                        index,
                                        $event
                                      ),
                                      accept: "video/*"
                                    }, null, 40, ["onChange"])
                                  ]),
                                  createVNode("td", { class: "border px-2 py-2 flex items-center justify-center" }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => removeEpisode(index),
                                      disabled: index == 0,
                                      class: "bg-red-600 text-white p-3 rounded-sm"
                                    }, " Видалити ", 8, ["onClick", "disabled"])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "float-right" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded cursor-pointer"
                        }, " Додати курс ")
                      ])
                    ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AddCourse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
