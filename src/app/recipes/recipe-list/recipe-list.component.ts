import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[new Recipe('A test Recipe','This is simply a test','https://www.google.com/imgres?imgurl=https%3A%2F%2F144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com%2Fuploads%2Ffood_portal_data%2Frecipes%2Frecipe%2Fhero_article_image%2F4126%2Fe890ffc91a85684b63ff%2Fletterbox_ButterChicken.jpg&imgrefurl=https%3A%2F%2Frecipes.sainsburys.co.uk%2Frecipes%2Fmain-courses%2Fhealthier-butter-chicken&docid=uyaDAJdSHr-wyM&tbnid=E4Phlwtg8ZwJ6M%3A&vet=10ahUKEwiryoXR_IziAhWrl-AKHSzRDfMQMwiaASgjMCM..i&w=772&h=434&client=safari&bih=748&biw=1348&q=recipes&ved=0ahUKEwiryoXR_IziAhWrl-AKHSzRDfMQMwiaASgjMCM&iact=mrc&uact=8')];

  constructor() { }

  ngOnInit() {
  }

}
