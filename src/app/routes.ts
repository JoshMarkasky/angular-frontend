import { ShowAllUsersComponent } from "./components/show-all-users/show-all-users.component";
import { UserFormComponent } from './components/user-form/user-form.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';

export const appRoutes = [
  { path: "getAllUsers", component: ShowAllUsersComponent },
  { path: "addUser", component: UserFormComponent },
  { path: "post/:id", component: OnePostComponent },
  { path: "postPost", component: PostFormComponent }
];
