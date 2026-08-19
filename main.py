#args #Made changes to this line #wrote this line while in the new_branch in the git
import json
'''
def test(*args,):
    for i in args:
        print(i)
#kwargs
def test1(**kwargs):
    for key,value in kwargs.items():
        print(f"P{key}:{value}")
    
#Instance methods,class methods,static methods
class Parent:
    class_name="Name"
    @classmethod
    def changer(cls,new):
        cls.class_name=new
    @classmethod
    def printer(cls):
        return cls.class_name
        
        
print(Parent.printer())
Parent.changer("newName")
#Inheritance

class Parent:
    def __init__(self,name):
        self.name=name
    def print(self):
        print(f"My Name is {self.name}")
class Child(Parent):
    def print(self):
        print(f"My new Name us {self.name}")

child_class=Child("Shahir")
child_class.print()


'''
with open('data.json') as f:
    data=json.load(f)

data['name']="Shahir"
with open('data.json','w') as file:
    json.dump(data,file,indent=4)           
