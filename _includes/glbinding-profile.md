![glbinding]({{ site.baseurl }}/glbinding-logo.png)

*glbinding* is an [MIT licensed](http://opensource.org/licenses/MIT), cross-platform C++ binding for the [OpenGL API](http://www.opengl.org).

*glbinding* leverages modern C++11 features like enum classes, lambdas, and variadic templates, instead of relying on macros; 
all OpenGL symbols are real functions and variables. 
It provides type-safe parameters, per feature API header, lazy function resolution, multi-context and multi-thread support, global and local function callbacks, meta information about the generated OpenGL binding and the OpenGL runtime, as well as tools and examples for quick-starting your projects.
Based on the OpenGL API specification ([gl.xml](https://cvs.khronos.org/svn/repos/ogl/trunk/doc/registry/public/api/gl.xml)) *glbinding* is generated using python scripts and templates that can be easily adapted to fit custom needs.
