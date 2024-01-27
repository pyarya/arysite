var year = new Date().getFullYear();
const month = new Date().getMonth();

let uniyear;

if (month >= 8) {
  year++;
}

switch (year) {
  case 2023:
    uniyear = "first";
    break;
  case 2024:
    uniyear = "second";
    break;
  case 2025:
    uniyear = "third";
    break;
  case 2026:
    uniyear = "fourth";
    break;
  default:
    uniyear = "graduated";
    break;

}