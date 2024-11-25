import axios from "axios";

export const fetchQuestionsWithOptions = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    const shuffled = posts.sort(() => 0.5 - Math.random());
    const selectedPosts = shuffled.slice(0, 10);

    const questionsWithOptions = selectedPosts.map((post) => {
      const options = generateRandomOptions(post.title, posts);
      return {
        question: post.body,
        options,
        correctAnswer: post.title,
      };
    });

    return questionsWithOptions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

const generateRandomOptions = (correctAnswer, posts) => {
  const options = [correctAnswer];

  while (options.length < 4) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const randomOption = randomPost.title;
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }
  return options.sort(() => 0.5 - Math.random());
};
