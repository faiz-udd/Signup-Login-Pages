let selectedFaculty;
document.getElementById("faculty").addEventListener("change", function() {
    let faculty = this.value;
    selectedFaculty = faculty;
    let departmentSelect = document.getElementById("department");
    
    // Clear existing options
    departmentSelect.innerHTML = '<option value="" disabled selected>Select Department</option>';

    // Add departments based on selected faculty
    switch (faculty) {
        case "Faculty of Social Sciences":
            departmentSelect.innerHTML += `
                <option value="Department of Political Science">Department of Political Science</option>
                <option value="Department of Sociology">Department of Sociology</option>
                <option value="Department of Psychology">Department of Psychology</option>
                <option value="Department of Education">Department of Education</option>
            `;
            break;
        case "Faculty of Economics and Management Sciences":
            departmentSelect.innerHTML += `
                <option value="Department of Economics">Department of Economics</option>
                <option value="Department of Business Administration">Department of Business Administration</option>
                <option value="Department of Technology Management">Department of Technology Management</option>
                <option value="Department of Statistics">Department of Statistics</option>
            `;
            break;
        case "Faculty of Engineering and Technology":
            departmentSelect.innerHTML += `
                <option value="Department of Computer Science">Department of Computer Science</option>
                <option value="Department of Software Engineering">Department of Software Engineering</option>
                <option value="Department of Electronics">Department of Electronics</option>
                <option value="Department of Telecommunication Engineering">Department of Telecommunication Engineering</option>
                <option value="Department of Mechanical Engineering">Department of Mechanical Engineering</option>
                <option value="Department of Electrical Engineering">Department of Electrical Engineering</option>
                <option value="Department of Civil Engineering">Department of Civil Engineering</option>
            `;
            break;
        // Add cases for other faculties
    }
});

let selectedDepartment;
document.getElementById("department").addEventListener("change", function() {
    let department = this.value;
    selectedDepartment = department;
});

document.getElementById('signupbtn').addEventListener('click', function() {
    // Display success message
    alert('Your signup is successful!');

    // Redirect to login page
    window.location.href = 'login.html';
});

document.getElementById('github-login').addEventListener('click', function() {
    window.location.href = '/auth/github';
});

document.getElementById('google-login').addEventListener('click', function() {
    window.location.href = '/auth/google';
});
