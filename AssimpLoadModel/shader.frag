#version 410 core

in vec3 incolor;

out vec4 color;

//uniform sampler2D texture_diffuse1;

void main()
{
    //color = vec4(texture(texture_diffuse1, TexCoords));
	color = vec4(incolor, 1.0);
}
