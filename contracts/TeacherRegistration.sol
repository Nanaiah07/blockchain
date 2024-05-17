// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TeacherRegistration {
    struct Teacher {
        string teacherName;
        string department;
        string designation;
        string domainOfInterest;
    }

    mapping(address => Teacher) public teachers;

    function registerTeacher(
        string memory _teacherName,
        string memory _department,
        string memory _designation,
        string memory _domainOfInterest
    ) public {
        teachers[msg.sender] = Teacher(_teacherName, _department, _designation, _domainOfInterest);
    }

    function getTeacherDetails(
        address _user
    )
        public
        view
        returns (string memory, string memory, string memory, string memory)
    {
        Teacher memory teacher = teachers[_user];
        return (teacher.teacherName, teacher.department, teacher.designation, teacher.domainOfInterest);
    }
}
