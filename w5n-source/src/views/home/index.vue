<template>
  <div class="mt-5 flex flex-wrap gap-10">
    <div>
      <div class="flex items-center">
        <div>Mở rộng content:</div>
        <el-radio-group v-model="widthContent" class="ml-4">
          <el-radio class="text-black/70" :label="1" size="large">Mức 1</el-radio>
          <el-radio class="text-black/70" :label="2" size="large">Mức 2</el-radio>
          <el-radio class="text-black/70" :label="3" size="large">Mức 3</el-radio>
        </el-radio-group>
      </div>
      <div class="flex items-start">
        <div class="mr-5 mt-[0.8rem] min-w-[10rem]">
          <div>Category:</div>
          <div @click="selectAll()" class="flex items-center gap-2 cursor-pointer text-[chocolate]">
            <el-icon><CircleCheckFilled /></el-icon>  all
          </div>
          <div @click="selectAll(false)" class="flex items-center gap-2 cursor-pointer text-[chocolate]">
            <el-icon><CircleCloseFilled /></el-icon>  all
          </div>
          <div>Total: {{ totalComponent }}</div>
        </div>
        <div class="flex flex-wrap gap-x-10 gap-y-0">
          <div v-for="(item, index) in modules" :key="index">
            <div class="flex items-center gap-3">
              <el-checkbox class="mr-5" v-model="item.show" :label="item.group" size="large"/> <span class="text-red-500 font-bold">{{ item.components.length }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-input v-model="form.search" placeholder="Search module" />
    <div class="w-full" v-for="(group, index) in moduleList" :key="index">
      <div class="font-bold uppercase text-[2rem]">{{ group.group }}</div>
      <div class="mt-5 flex flex-wrap gap-10">
        <div
          class="max-w-[25rem]"
          v-for="(item, index) in group.components"
          :key="index"
        >
          <div class="relative group" v-if="item.name">
            <div class="w-[25rem] h-[25rem] wrap-modules rounded-xl">
              <img
                :src="item.image"
                class="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <div class="text-center mt-2 font-bold cursor-pointer text-[blue]">
              {{ item.name }}
            </div>
            <div class="text-center mt-2 font-bold cursor-pointer text-[red]">
              Core: {{ item.core }}
            </div>
            <div class="text-right text-[2rem]">
              <el-icon><Star class="hover:text-[blue] cursor-pointer" /></el-icon>
            </div>
            <div
              :class="`${
                widthContent == 1
                  ? 'w-full'
                  : widthContent == 2
                  ? 'w-[50rem]'
                  : 'w-[75rem]'
              } absolute left-0 top-0 h-[30rem] bg-[white] border border-solid border-[red] z-[10] p-[1rem] whitespace-pre-line rounded-lg overflow-y-auto hidden group-hover:block transition-opacity duration-250 ease-in opacity-0 hover:opacity-100`"
            >
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { selfGrowth } from "./self-growth";
import { sad } from "./sad";
import { life } from "./life";
import { money } from "./money";
import { love } from "./love";
import { friend } from "./friend";
import { social } from "./social";
import { successAndFail } from "./success-and-fail";
import { studyAndWork } from "./study-and-work";
import { web5ngay } from "./web5ngay";
import { lesson } from "./lesson";
import { happiness } from "./happiness";
import { think } from "./think";
import { self } from "./self";
import { problem } from "./problem";

export default {
  setup() {
    const state = reactive({
      form: {
        search: "",
      },
      modules: [
        {
          group: "Phát triển bản thân",
          components: selfGrowth,
          show: true,
        },
        {
          group: "Buồn",
          components: sad,
          show: true,
        },
        {
          group: "Học tập/Làm việc",
          components: studyAndWork,
          show: true,
        },
        {
          group: "Sự sống",
          components: life,
          show: true,
        },
        {
          group: "Bạn bè",
          components: friend,
          show: true,
        },
        {
          group: "Tiền/Tài chính",
          components: money,
          show: true,
        },
        {
          group: "Tình yêu",
          components: love,
          show: true,
        },
        {
          group: "Mạng xã hội",
          components: social,
          show: true,
        },
        {
          group: "Thành công/thất bại",
          components: successAndFail,
          show: true,
        },
        {
          group: "Về Web5ngay",
          components: web5ngay,
          show: true,
        },
        {
          group: "Bài học",
          components: lesson,
          show: true,
        },
        {
          group: "Hạnh phúc",
          components: happiness,
          show: true,
        },
        {
          group: "Suy ngẫm",
          components: think,
          show: true,
        },
        {
          group: "Hiểu mình",
          components: self,
          show: true,
        },
        {
          group: "Vấn đề",
          components: problem,
          show: true,
        },
      ],
      widthContent: 2,
    });

    const moduleList = computed(() => {
      const modules = [];
      state.modules.forEach((item) => {
        const module = {
          ...item,
          components: item.components.filter(
            (component) =>
              component.name
                .toLowerCase()
                .includes(state.form.search.toLowerCase()) ||
              (component.core + "")
                .toLowerCase()
                .includes(state.form.search.toLowerCase()) ||
              component.content
                .toLowerCase()
                .includes(state.form.search.toLowerCase())
          ),
        };
        if (module.components.length > 0 && module.show) {
          modules.push(module);
        }
      });
      return modules;
    });

    const totalComponent = computed(() => {
      let total = 0;
      state.modules.forEach((item) => {
        total += item.components.length;
      });
      return total;
    });

    /**
     * selectAll select all
     * @author HaoDT
     */
    const selectAll = (select = true) => {
      const modules = [];
      state.modules.forEach(item => {
        modules.push({ ...item, show: select });
      });
      state.modules = modules;
    }
    return {
      ...toRefs(state),
      moduleList,
      selectAll,
      totalComponent,
    };
  },
};
</script>

<style lang="scss">
.wrap-modules {
  overflow: hidden;
  img {
    transition: 0.3s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.el-checkbox__label {
  color: #3737ab !important;
}
</style>
