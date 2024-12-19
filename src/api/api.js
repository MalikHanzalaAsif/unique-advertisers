import toastEmitter from "@/components/common/toast";
import { BASE_URL, CF7_FORM_ENDPOINT, VARIABLES } from "@/utils/variables";
import axios from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const formApi = async (formId, payload) => {
  try {
    const res = await instance.post(
      CF7_FORM_ENDPOINT + formId + VARIABLES.FEEDBACK,
      payload
    );
    if (res.status >= 200 && res.status <= 300) {
      toastEmitter({
        title: res.data?.message ?? "Your form has been submitted",
        type: "success",
      });
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const posts = async (payload) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROOT}/posts?slug=${
        payload.id
      }&_fields=title,date,content,author,featured_media,categories,tags`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export const author = async (payload) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_ROOT
      }/users?include=${payload}&_fields=id,name`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export const tags = async (payload) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_ROOT
      }/tags?include=${payload}&_fields=name,slug`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export const categories = async (payload) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_ROOT
      }/categories?include=${payload}&_fields=name,slug`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      console.log("Cat", res.data);
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPostByCategories = async (payload) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_ROOT
      }/posts?categories[terms]=22&categories[operator]=AND`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      console.log(res.data);
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
