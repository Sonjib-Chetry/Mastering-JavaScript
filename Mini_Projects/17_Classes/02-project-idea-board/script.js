
// 1. Define projectStatus constant
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

// 2. ProjectIdea class
class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING; // default
  }

  // 3. Method to update project status
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

// 4. ProjectIdeaBoard class
class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = []; // empty array to store ProjectIdea instances
  }

  // 5. Pin method
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  // 6. Unpin method
  unpin(projectIdea) {
    this.ideas = this.ideas.filter(idea => idea !== projectIdea);
  }

  // 7. Count method
  count() {
    return this.ideas.length;
  }

  // 8. formatToString method
  formatToString() {
    let output = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return output;
  }
}
