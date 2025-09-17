// API endpoint for fetching latest forum data
const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
// Base URLs for forum topic and category pages
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
// Base URL for user avatars
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

// Container element where posts will be rendered
const postsContainer = document.getElementById("posts-container");

// Mapping of category IDs to their display properties
const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

// Generates HTML link for a forum category
const forumCategory = (id) => {
  let selectedCategory = {};

  // Check if category exists in predefined list
  if (allCategories.hasOwnProperty(id)) {
    // Destructure properties from category data
    const { className, category } = allCategories[id];

    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    // Default values for unknown categories
    selectedCategory.className = "general";
    selectedCategory.category = "General";
    selectedCategory.id = 1;
  }
  
  // Construct URL and CSS classes
  const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
  const linkText = selectedCategory.category;
  const linkClass = `category ${selectedCategory.className}`;

  // Return formatted category link
  return `<a href="${url}" class="${linkClass}" target="_blank">
    ${linkText}
  </a>`;
};

// Converts timestamp to relative time string
const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  // Calculate time difference in milliseconds
  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  // Convert to minutes/hours/days
  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  // Return appropriate relative time string
  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};

// Formats view count for display
const viewCount = (views) => {
  // Calculate thousands for large numbers
  const thousands = Math.floor(views / 1000);

  if (views >= 1000) {
    return `${thousands}k`;
  }

  return views;
};

// Generates HTML for user avatars
const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      // Find user data matching poster ID
      const user = users.find((user) => user.id === poster.user_id);
      if (user) {
        // Resolve avatar URL template
        const avatar = user.avatar_template.replace(/{size}/, 30);
        // Handle different avatar path formats
        const userAvatarUrl = avatar.startsWith("/user_avatar/")
          ? avatarUrl.concat(avatar)
          : avatar;
        // Return formatted image tag
        return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
      }
    })
    .join("");  // Combine all avatars into single string
};

// Fetches forum data from API
const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

// Initiate data fetching
fetchData();

// Renders latest posts to the DOM
const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;

  // Generate HTML table rows for each topic
  postsContainer.innerHTML = topics.map((item) => {
    // Destructure topic properties
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at,
    } = item;

    // Build HTML row for current topic
    return `
    <tr>
      <td>
        <a target="_blank" href="${forumTopicUrl}${slug}/${id}" class="post-title">${title}</a>
        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      <td>${posts_count - 1}</td>  <!-- Display reply count -->
      <td>${viewCount(views)}</td>  <!-- Formatted view count -->
      <td>${timeAgo(bumped_at)}</td>  <!-- Relative time -->
    </tr>`;
  }).join("");  // Combine all rows into single string
};