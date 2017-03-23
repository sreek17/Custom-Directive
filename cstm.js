var app = angular.module('firstApplication',[]);

app.directive('myFirstDirective',function(){
    return{
        template:'Hello World'
    }
})

app.controller('people',function(){
    
});