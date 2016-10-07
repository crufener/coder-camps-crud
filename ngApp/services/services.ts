namespace ajaxresource.Services {
    export class MovieService {
        public MovieResource;

        public listMovies() {
            //the ".query()" is a get method
            return this.MovieResource.query();
        }

        public saveMovies(movie) {
            return this.MovieResource.save(movie).$promise
        }

        public getMovie(movieId) {
            return this.MovieResource.get({id: movieId});
        }

        public deleteMovie(movieId) {
            return this.MovieResource.delete({id: movieId}).$promise;
        }
        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies/:id');
        }
    }
    angular.module('ajaxresource').service('movieService', MovieService);
}
