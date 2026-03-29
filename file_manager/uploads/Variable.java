class Access{
int a;
static String name="Salma";
void age(){
int age=19;
System.out.println("Age"+age);


}


}
class Variable{

public static void main(String k[])
{
Access o=new Access();
System.out.println("Name:"+Access.name);
System.out.println("a:"+o.a);
o.age();
}
}