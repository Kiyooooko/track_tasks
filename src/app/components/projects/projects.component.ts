import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Database, objectVal, ref, set, update, remove } from '@angular/fire/database';
import { map } from 'rxjs/operators';

interface Project  {
  title: string;
  id: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public readonly projects$: Observable<Project[]>;

  constructor(private database: Database) {
    const doc = ref(database, 'projects');
    this.projects$ = objectVal(doc).pipe(map((res: any) => Object.values(res)));
  }

  addProject(id = 'new') {
    set(ref(this.database, `projects/${id}`), {
      id,
      title: 'super puper'
    })
  }

  updateProject(id = 'new') {
    const postData = {
      title: 'New title3',
      id: 'lala'
    };

    const newKey = `/projects/new/`
    const updates: { [newKey]: Project} = {
      [newKey]: postData
    };

    update(ref(this.database), updates);
  }

  deleteProject(id: string) {
    const itemToRemove = ref(this.database, `projects/${id}`)
    remove(itemToRemove);
  }
}
