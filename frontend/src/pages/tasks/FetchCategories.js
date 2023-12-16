import { axiosReq } from "../../api/axiosDefaults";

async function fetchCategories(currentUser) {
  try {
    const response = await axiosReq.get("/categories/");
    if (response.data?.results) {
      const userCategories = response.data.results.filter(
        (category) =>
          category.owner === currentUser?.username && category.is_owner
      );

      return userCategories.map((category) => ({
        id: category.id,
        title: category.title,
        owner: category.owner,
        is_owner: category.is_owner,
      }));
    } else {
      console.error("Invalid response format for categories:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default fetchCategories;