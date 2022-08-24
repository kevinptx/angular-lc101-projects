import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Buy groceries', 'Study for exam', 'Complete Essay' ];
   finishedChores = ['Walk Dog', 'Code', 'Water grass', 'Clean bathroom', 'Run', 'Do Pushups'];

   targetImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3SG-F8xZYrN_tpaR9-EBhw2zsLsrDemoHV7B_AU&s';

   constructor() { }

   ngOnInit() {
   }

}
