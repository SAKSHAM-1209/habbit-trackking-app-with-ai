const habitInput = document.getElementById('habitInput');
const addHabitButton = document.getElementById('addHabit');
const habitList = document.getElementById('habitList');
const aiSuggestion = document.getElementById('aiSuggestion');
const insight = document.getElementById('insight');

let habits = [];

addHabitButton.addEventListener('click', () => {
    const habit = habitInput.value.trim();
    if (habit) {
        habits.push({ name: habit, completed: 0 });
        renderHabits();
        habitInput.value = '';
    }
});

function renderHabits() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${habit.name}
            <button onclick="markCompleted(${index})">Mark Completed</button>
        `;
        habitList.appendChild(li);
    });
}

function markCompleted(index) {
    habits[index].completed++;
    renderHabits();
    generateAIInsights();
}

// AI Module for Insights
function generateAIInsights() {
    const totalHabits = habits.length;
    const completedHabits = habits.reduce((sum, habit) => sum + habit.completed, 0);

    if (completedHabits === 0) {
        insight.textContent = "You haven't completed any habits yet. Let's get started!";
    } else if (completedHabits < totalHabits) {
        insight.textContent = `Great start! You've completed ${completedHabits} out of ${totalHabits} habits.`;
    } else {
        insight.textContent = "Amazing! You've completed all your habits. Keep up the momentum!";
    }

    aiSuggestion.classList.remove('hidden');
}
