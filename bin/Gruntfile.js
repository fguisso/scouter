module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: false
			},
			css: {
				files: ['stylus/*.styl'],
				tasks: ['stylus']
			},
			html: {
				files: ['jade/*.jade'],
				tasks: ['jade']
			}
		},
		stylus: {
			compile: {
				options: {
					paths: ['/stylus'],
					relativeDest: '../styles'
				},
				files: {
					'../assets/styles/style.css': ['stylus/logo.styl','stylus/*.styl']
				}
			}
		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					'../index.html':['jade/*.jade']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};