
#include <glbinding/ContextHandle.h>

#ifdef SYSTEM_WINDOWS
#include <windows.h>
#elif SYSTEM_DARWIN
#include <OpenGL/OpenGL.h>
#elif GLCONTEXT_GLX
#include <GL/glx.h>
#elif GLCONTEXT_EGL
#include <EGL/egl.h>
#endif


namespace glbinding
{


ContextHandle getCurrentContext()
{
    auto id = ContextHandle{0};

#ifdef SYSTEM_WINDOWS
    const auto context = wglGetCurrentContext();
#elif SYSTEM_DARWIN
    const auto context = CGLGetCurrentContext();
#elif GLCONTEXT_GLX
    const auto context = glXGetCurrentContext();
#elif GLCONTEXT_EGL
    const auto context = eglGetCurrentContext();
#endif
    id = reinterpret_cast<ContextHandle>(context);

    return id;
}


} // namespace glbinding
