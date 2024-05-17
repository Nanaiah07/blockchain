const TeacherRegistration = artifacts.require("TeacherRegistration");

module.exports = function(deployer) {
  deployer.deploy(TeacherRegistration);
};