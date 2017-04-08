package auth;

public class MaskChecker {
    public boolean checkMasks(String obtained, String required) {
        int i = 0;
        
        while (i < obtained.length() && i < required.length()) {
            if (checkPermission(obtained.charAt(i), required.charAt(i)))
                return false;
        }
        
        while (i < required.length()) {
            if (checkPermission('0', required.charAt(i)))
                return false;
        }
        
        return true;
    }
    
    private boolean checkPermission(char obtained, char needed) {
        if (needed == '1' && obtained == '0')
            return false;
        
        return true;
    }
}
