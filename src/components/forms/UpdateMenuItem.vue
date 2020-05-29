<template>
  <div>
    Here You can update Items like mainCourse desserts, fruits etc..
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
    <button :disabled="!isButtonActive" @click="updateItem">Update</button>
  </div>
</template>

<script>
import { FoodTypes, MainCourseKey } from "../../constants/MenuItemTypes";
import InputContainer from "../genericComponents/InputContainer";

export default {
  name: "UpdateMenuItem",
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
        Type: "",
        ApproximitelyCookingTime: undefined
      },
      FoodTypes
    };
  },
  mounted() {
    this.reset();
    this.menuItem = this.theItemToUpdate;
  },
  computed: {
    theItemToUpdate() {
      return this.$store.getters.getFoodById(this.itemId);
    },
    itemId() {
      return this.$route.query.id;
    },
    isSelectedFoodMainCourse() {
      return this.menuItem.Type && this.menuItem.Type === MainCourseKey;
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
  methods: {
    updateItem() {
      this.$store.dispatch("updateFood", this.menuItem);
      this.reset();
      this.$router.push({ path: "menu" });
    },
    reset() {
      this.menuItem = {
        id: null,
        name: "",
        unitPrice: null,
        isAvailable: true,
        description: "",
        type: "",
        approximitelyCookingTime: undefined
      };
    }
  }
};
</script>
