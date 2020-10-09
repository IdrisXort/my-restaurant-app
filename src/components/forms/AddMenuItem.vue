<template>
  <div>
    Here You can add new menu Items like mainCourse desserts, fruits etc..
    <InputContainer label="The type of MenuItem">
      <template v-for="(foodType, index) in FoodTypes">
        <input
          type="radio"
          :key="index"
          :value="foodType"
          v-model="menuItem.type"
        />
        {{ foodType }}
      </template>
    </InputContainer>
    <InputContainer
      v-if="isSelectedFoodMainCourse"
      label="The type of MainCourse"
    >
      <template v-for="(mainCourseType, index) in MainCourseTypes">
        <input
          type="radio"
          :key="index"
          :value="mainCourseType"
          v-model="menuItem.subType"
        />
        {{ mainCourseType }}
      </template>
    </InputContainer>
    <InputContainer label="The name of MenuItem">
      <input type="text" v-model="menuItem.name" />
    </InputContainer>
    <InputContainer label="The price of MenuItem">
      <input type="number" v-model="menuItem.unitPrice" />
    </InputContainer>
    <InputContainer label="Is MenuItem available">
      <input type="checkbox" v-model="menuItem.isAvailable" />
    </InputContainer>
    <InputContainer label="MenuItem Description">
      <textarea v-model="menuItem.description" />
    </InputContainer>
    <InputContainer
      v-if="isSelectedFoodMainCourse"
      label="The approximitely cooking time of MenuItem"
    >
      <input type="number" v-model="menuItem.approximitelyCookingTime" />
    </InputContainer>
    <button :disabled="!isButtonActive" @click="addUpdateItem">Add Item</button>
  </div>
</template>

<script>
import {
  FoodTypes,
  MenuItemType,
  MainCourseTypes
} from "../../constants/MenuItemTypes";
import { MenuItemInputModel } from "../../models/InputModels/MenuItemInputModel";
import InputContainer from "../genericComponents/InputContainer";
import Guid from "guid";

export default {
  name: "AddMenuItem",
  components: {
    InputContainer
  },
  data() {
    return {
      menuItem: {
        id: null,
        name: "",
        unitPrice: null,
        isAvailable: true,
        description: "",
        type: "",
        approximitelyCookingTime: undefined,
        subType: undefined
      },
      FoodTypes,
      MainCourseTypes
    };
  },
  mounted() {
    this.reset();
  },
  computed: {
    isSelectedFoodMainCourse() {
      return this.menuItem.type === MenuItemType.MainCourse;
    },
    isButtonActive() {
      return (
        this.menuItem.name &&
        this.menuItem.unitPrice &&
        this.menuItem.description &&
        this.menuItem.type
      );
    }
  },
  watch: {
    isSelectedFoodMainCourse(newVal) {
      if (!newVal) {
        this.menuItem.approximitelyCookingTime = undefined;
      }
    }
  },
  methods: {
    addUpdateItem() {
      this.$store.dispatch("addNewFood", new MenuItemInputModel(this.menuItem));
      this.reset();
    },
    reset() {
      this.menuItem = {
        name: "",
        unitPrice: null,
        isAvailable: true,
        description: "",
        type: "",
        approximitelyCookingTime: undefined,
        id: Guid.raw()
      };
    }
  }
};
</script>
