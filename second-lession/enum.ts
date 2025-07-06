// Numeric Enums - Default
enum Role {
    Admin,
    Editor,
    Viewer,
};

console.log(Role.Admin);
console.log(Role.Editor);
console.log(Role.Viewer);

// Numeric Enums - Initialized
enum Status {
    Success = 'SUCCESS',
    Pending = 'PENDING',
    Skipped = 'SKIPPED', 
    Failure = 'FALURE',
};

console.log(Status.Success);
console.log(Status.Pending);
console.log(Status.Skipped);
console.log(Status.Failure);

for (const key in Status) {
  console.log(`${key}: ${Status[key as keyof typeof Status]}`);
}


enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);