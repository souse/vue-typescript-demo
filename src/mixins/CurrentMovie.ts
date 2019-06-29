import { Getter } from 'vuex-class'
import { WithRouter } from '@/utils'

import { Movie } from '@/utils/interface'

export default class CurrentMovie extends WithRouter {
  @Getter('currentMovie') movie!:  Movie
}