describe('find largest sub-string',function(){
    
    beforeEach(module('myApp'));
    
    /** Controller Intialization */
    describe('homecontroller',function(){
        var resultLargestString = {
            item : "jumped",
            length: 6
        }
        beforeEach(inject(function($controller){
            myCtrl = $controller('homecontroller');
        }));

        /** Testing the functionality of getLongSubString */
        it('Testing the function getLongSubString',function(){
            myCtrl.inputStr = "The cow jumped over the moon";
            myCtrl.getLongSubString();
            expect(myCtrl.resultLargestString).toEqual(resultLargestString);
        })

        /** Type Checking of inputStr */
        it('Type Checking of input variable is string',function(){
            myCtrl.inputStr = "The cow jumped over the moon";
            expect(myCtrl.inputStr).toEqual(jasmine.any(String));
        })
    })
})