import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default class AppController extends Controller {

  @task(function* () {
    console.log("changed");
  })
  someTask;
}
