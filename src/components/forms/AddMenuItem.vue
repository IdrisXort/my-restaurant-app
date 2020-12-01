<template>
  <div>
    Here You can add new menu Items like mainCourse desserts, fruits etc..
    <InputContainer label="The type of MenuItem">
      <template v-for="(foodType, index) in FoodTypes">
        <input
          type="radio"
          :key="index"
          :value="foodType"
          v-model="menuItem.Type"
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
          v-model="menuItem.SubType"
        />
        {{ mainCourseType }}
      </template>
    </InputContainer>
    <InputContainer label="The name of MenuItem">
      <input type="text" v-model="menuItem.Name" />
    </InputContainer>
    <InputContainer label="The price of MenuItem">
      <input type="number" v-model="menuItem.UnitPrice" />
    </InputContainer>
    <InputContainer label="Is MenuItem available">
      <input type="checkbox" v-model="menuItem.IsAvailable" />
    </InputContainer>
    <InputContainer label="MenuItem Description">
      <textarea v-model="menuItem.Description" />
    </InputContainer>
    <InputContainer
      v-if="isSelectedFoodMainCourse"
      label="The approximitely cooking time of MenuItem"
    >
      <input type="number" v-model="menuItem.ApproximitelyCookingTime" />
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
        Id: null,
        Name: "",
        UnitPrice: null,
        IsAvailable: true,
        Description: "",
        Yype: "",
        ApproximitelyCookingTime: undefined,
        SubType: undefined
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
      return this.menuItem.Type === MenuItemType.MainCourse;
    },
    isButtonActive() {
      return (
        this.menuItem.Name &&
        this.menuItem.UnitPrice &&
        this.menuItem.Description &&
        this.menuItem.Type
      );
    }
  },
  watch: {
    isSelectedFoodMainCourse(newVal) {
      if (!newVal) {
        this.menuItem.ApproximitelyCookingTime = undefined;
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
        Id: Guid.raw(),
        Name: "",
        UnitPrice: null,
        IsAvailable: true,
        Description: "",
        Yype: "",
        ApproximitelyCookingTime: undefined,
        SubType: undefined
      };
    }
  }
};
</script>
