////////////////////////////////////////////////////////////////////////////////////////////////////
//                               This file is part of CosmoScout VR                               //
//      and may be used under the terms of the MIT license. See the LICENSE file for details.     //
//                        Copyright: (c) 2019 German Aerospace Center (DLR)                       //
////////////////////////////////////////////////////////////////////////////////////////////////////

#ifndef CS_GRAPHICS_ECLIPSE_SHADOW_CASTER_HPP
#define CS_GRAPHICS_ECLIPSE_SHADOW_CASTER_HPP

#include <GL/glew.h>

namespace cs::graphics {
  class EclipseShadowCaster {
   public:
    double mScalingExponent;
    double mRadius;

    virtual void bind(GLenum textureUnit) = 0;
    virtual void unbind(GLenum textureUnit) = 0;
  };
}

#endif // CS_GRAPHICS_ECLIPSE_SHADOW_CASTER_HPP